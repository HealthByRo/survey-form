import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import ItemsCategory from './ItemsCategory';

const FormItem = Form.Item;

export default function createSurveyForm(memberId) {
  @reduxForm({
    form: `SurveyForm${memberId}`,
  })
  class SurveyForm extends Component {
    static propTypes = {
      handleSubmit: PropTypes.func.isRequired,
      pristine: PropTypes.bool.isRequired,
      readonly: PropTypes.bool,
      submitting: PropTypes.bool.isRequired,
      surveyItems: PropTypes.array.isRequired,
      valid: PropTypes.bool.isRequired,
    };

    static defaultProps = {
      readonly: false,
    };

    onSubmit = (event) => {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      this.props.handleSubmit();
    }

    isSubmitBtnDisabled() {
      const {
        pristine,
        submitting,
        valid,
        readonly,
      } = this.props;

      return readonly || pristine || submitting || !valid;
    }

    render() {
      const {
        surveyItems,
        submitting,
        readonly,
      } = this.props;

      return (
        <form
          className="survey-form"
          noValidate
          onSubmit={this.onSubmit}
        >
          {surveyItems.map((category) => (
            <FormItem
              className="survey-form--category"
              key={category.id}
            >
              <ItemsCategory category={category} />
            </FormItem>
          ))}

          {!readonly
            && (
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={submitting}
                  disabled={this.isSubmitBtnDisabled()}
                >
                  Save
                </Button>
              </FormItem>
            )
          }
        </form>
      );
    }
  }

  return SurveyForm;
}
