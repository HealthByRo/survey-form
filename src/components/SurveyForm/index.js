import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import SurveyItem from '../SurveyItem';

const FormItem = Form.Item;

export default function createSurveyForm(surveyId) {
  const SurveyForm = (props) => {
    const {
      surveyItems,
      handleSubmit,
      pristine,
      submitting,
      valid,
    } = props;

    const onSubmit = (event) => {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      if (valid) {
        handleSubmit();
      }
    };

    return (
      <form onSubmit={onSubmit} noValidate>
        {surveyItems.map((surveyItem) =>
          <FormItem key={surveyItem.id} >
            <SurveyItem {...surveyItem}>{surveyItem.id}</SurveyItem>
          </FormItem>
        )}

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={submitting}
            disabled={pristine || submitting || !valid}
          >SAVE</Button>
        </FormItem>
      </form>
    );
  };

  SurveyForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    surveyItems: PropTypes.array.isRequired,
  };

  return reduxForm({
    form: `SurveyForm${surveyId}`,
  })(SurveyForm);
}
