import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import connectWithBackend from 'redux-connect-backend';
import _get from 'lodash/get';
import Spin from 'antd/lib/spin';
import createSurveyForm from '../../components/SurveyForm';
import {
  formSaveSucceedAction,
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
  onFormSaveSucceedAction: formSaveSucceedAction,
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
    onFormSaveSucceedAction: PropTypes.func.isRequired,
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

  onSubmit(valuesMap) {
    const {
      surveyId,
      updateSurveyItem,
      onFormSaveSucceedAction,
      onFormSaveFailedAction,
    } = this.props;
    const values = valuesMap.toJS();
    const saveItemPromises = [];

    Object
      .keys(values)
      .forEach((fieldName) => {
        const surveyItemId = getSurveyItemIdFromFieldName(fieldName);
        const payload = getSurveyItemUpdatedPayload(values[fieldName]);
        const promise = updateSurveyItem(surveyId, surveyItemId, payload);
        saveItemPromises.push(promise);
      });

    return Promise
      .all(saveItemPromises)
      .then(() => {
        onFormSaveSucceedAction(this.formName);
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
