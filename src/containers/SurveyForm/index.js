import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import connectWithBackend from 'redux-connect-backend';
import _get from 'lodash/get';
import _forIn from 'lodash/forIn';
import Spin from 'antd/lib/spin';
import diff from 'return-deep-diff';
import createSurveyForm from '../../components/SurveyForm';
import {
  formSaveSuccessAction,
  formSaveFailedAction,
} from './actions';
import {
  getAllSurveyItems as getAllSurveyItemsApi,
  updateSurveyItem as updateSurveyItemApi,
} from '../../api/surveys/items';
import {
  getFieldName,
  getFieldInitialValue,
  getSurveyItemIdFromFieldName,
  getSurveyItemUpdatedPayload,
} from '../../utils/survey-item';

const mapDispatchToProps = {
  onFormSaveSuccessAction: formSaveSuccessAction,
  onFormSaveFailedAction: formSaveFailedAction,
};

const mapApiMethodsToActions = {
  getAllSurveyItems: getAllSurveyItemsApi,
  updateSurveyItem: updateSurveyItemApi,
};

@connect(null, mapDispatchToProps)
@connectWithBackend(mapApiMethodsToActions)
export default class SurveyFormContainer extends PureComponent {
  static propTypes = {
    surveyId: PropTypes.number.isRequired,
    getAllSurveyItems: PropTypes.func.isRequired,
    getAllSurveyItemsResult: PropTypes.object,
    updateSurveyItem: PropTypes.func.isRequired,
    onFormSaveSuccessAction: PropTypes.func.isRequired,
    onFormSaveFailedAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    getAllSurveyItemsResult: null,
  };

  constructor(props) {
    super(props);

    const { surveyId } = this.props;
    this.formName = `SurveyForm${surveyId}`;
    this.surveyForm = createSurveyForm(surveyId);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const {
      surveyId,
      getAllSurveyItems,
    } = this.props;

    getAllSurveyItems(surveyId);
  }

  onSubmit(values) {
    const {
      onFormSaveSuccessAction,
      onFormSaveFailedAction,
    } = this.props;
    const saveItemPromises = [];

    const changedValues = diff(this.getInitialValues(), values.toJS());

    _forIn(changedValues, (fieldValue, fieldName) => {
      const savePromise = this.saveItem(fieldValue, fieldName);
      saveItemPromises.push(savePromise);
    });

    return Promise
      .all(saveItemPromises)
      .then(() => {
        onFormSaveSuccessAction(this.formName);
      })
      .catch(() => {
        onFormSaveFailedAction(this.formName);
      });
  }

  getInitialValues() {
    const surveyItems = this.props.getAllSurveyItemsResult.data;
    const initialValues = {};

    surveyItems.forEach((surveyItem) => {
      const fieldName = getFieldName(surveyItem);
      initialValues[fieldName] = getFieldInitialValue(surveyItem);
    });

    return initialValues;
  }

  saveItem(fieldValue, fieldName) {
    const {
      surveyId,
      updateSurveyItem,
    } = this.props;

    const surveyItemId = getSurveyItemIdFromFieldName(fieldName);
    const payload = getSurveyItemUpdatedPayload(fieldValue);

    return updateSurveyItem(surveyId, surveyItemId, payload);
  }

  isEmpty() {
    return !_get(this.props.getAllSurveyItemsResult, 'data.length');
  }

  render() {
    const {
      getAllSurveyItemsResult: {
        processing,
        data,
      },
    } = this.props;

    const SurveyForm = this.surveyForm;

    return (
      <Spin spinning={processing}>
        {!processing && !this.isEmpty() &&
          <SurveyForm
            surveyItems={data}
            onSubmit={this.onSubmit}
            initialValues={this.getInitialValues()}
          />
        }
        {!processing && this.isEmpty() && <p>No items.</p>}
      </Spin>
    );
  }
}
