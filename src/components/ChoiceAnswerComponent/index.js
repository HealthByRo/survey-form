import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import createFormField from 'react-form-fields/lib/createFormField';
import createReduxFormField from 'react-form-fields/lib/createReduxFormField';
import { getValidateForQuestion } from '../../utils/validate';

const choiceComponents = {
  radio: createReduxFormField(createFormField(Radio.Group)),
  checkbox: createReduxFormField(createFormField(Checkbox.Group)),
};

export default function createChoiceAnswareComponent(type) {
  const ChoiceComponent = choiceComponents[type];

  function ChoiceAnswerComponent(props) {
    const {
      fieldName,
      question,
    } = props;
    const options = mapQuestionAnswersToOptions(question.answers);
    const validate = getValidateForQuestion(question);

    return (
      <Field
        name={fieldName}
        options={options}
        component={ChoiceComponent}
        validate={validate}
      />
    );
  }

  ChoiceAnswerComponent.propTypes = {
    fieldName: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
  };

  return ChoiceAnswerComponent;
}

function mapQuestionAnswersToOptions(choices) {
  return choices.map((choice) => ({
    value: choice.id,
    label: choice.text,
  }));
}

