import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import connectWithBackend from 'redux-connect-backend';
import _get from 'lodash/get';
import _forIn from 'lodash/forIn';
import _isBoolean from 'lodash/isBoolean';
import Spin from 'antd/lib/spin';
import diff from 'return-deep-diff';
import createSurveyForm from '~/components/SurveyForm';
import {
  getHealthSurvey as getHealthSurveyApi,
  postHealthSurvey as postHealthSurveyApi,
} from '~/api/health-survey';
import {
  getFieldName,
  getFieldInitialValue,
} from '~/utils/survey-item';
import {
  formSaveSuccessAction,
  formSaveFailedAction,
} from './actions';

const mapDispatchToProps = {
  onFormSaveSuccessAction: formSaveSuccessAction,
  onFormSaveFailedAction: formSaveFailedAction,
};

const mapApiMethodsToActions = {
  getHealthSurvey: getHealthSurveyApi,
  postHealthSurvey: postHealthSurveyApi,
};

@connect(null, mapDispatchToProps)
@connectWithBackend(mapApiMethodsToActions)
export default class SurveyFormContainer extends PureComponent {
  static propTypes = {
    memberId: PropTypes.number.isRequired,
    readonly: PropTypes.bool,
    getHealthSurvey: PropTypes.func.isRequired,
    getHealthSurveyResult: PropTypes.object,
    postHealthSurvey: PropTypes.func.isRequired,
    onFormSaveSuccessAction: PropTypes.func.isRequired,
    onFormSaveFailedAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    getHealthSurveyResult: null,
    readonly: false,
  };

  constructor(props) {
    super(props);

    const { memberId } = this.props;
    this.formName = `SurveyForm${memberId}`;
    this.surveyForm = createSurveyForm(memberId);
  }

  componentDidMount() {
    const {
      memberId,
      getHealthSurvey,
    } = this.props;

    getHealthSurvey(memberId);
  }

  getHealthSurvey() {
    return this.props.getHealthSurveyResult.data;
  }

  getInitialValues() {
    const surveyItems = this.getHealthSurvey();
    const initialValues = {};

    surveyItems.forEach((questionsCategory) => {
      questionsCategory.questions.forEach((question) => {
        const fieldName = getFieldName(question);
        initialValues[fieldName] = getFieldInitialValue(question);
      });
    });

    return initialValues;
  }

  handleSubmit = async (_values) => {
    const {
      onFormSaveSuccessAction,
      onFormSaveFailedAction,
    } = this.props;
    const saveAnswaresPromises = [];
    const values = this.processValues(_values);

    _forIn(values, (answare, questionId) => {
      const savePromise = this.saveAnsware(questionId, answare);
      saveAnswaresPromises.push(savePromise);
    });

    try {
      await Promise.all(saveAnswaresPromises);
      onFormSaveSuccessAction(this.formName);
    } catch (error) {
      onFormSaveFailedAction(this.formName);
    }
  }

  processValues(_values) {
    const changedValues = diff(this.getInitialValues(), _values.toJS());
    const values = {};

    _forIn(changedValues, (_value, key) => {
      if (_isBoolean(_value)) {
        values[key] = _value ? 'Yes' : 'No';
      } else {
        values[key] = _value;
      }
    });

    return values;
  }

  saveAnsware(questionId, answare) {
    const {
      memberId,
      postHealthSurvey,
    } = this.props;
    const payload = {
      question: questionId,
      answer: answare,
    };

    return postHealthSurvey(memberId, payload);
  }

  isEmpty() {
    return !_get(this.getHealthSurvey(), 'length');
  }

  render() {
    const {
      getHealthSurveyResult: {
        processing,
        data,
      },
      readonly,
    } = this.props;

    const SurveyForm = this.surveyForm;

    return (
      <Spin spinning={processing}>
        {!processing && !this.isEmpty()
          && (
            <SurveyForm
              surveyItems={data}
              onSubmit={this.handleSubmit}
              initialValues={this.getInitialValues()}
              readonly={readonly}
            />
          )
        }

        {!processing && this.isEmpty()
          && (
            <p>
              No items.
            </p>
          )
        }
      </Spin>
    );
  }
}
