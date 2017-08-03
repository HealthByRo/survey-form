import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Input from 'antd/lib/input';
import createFormField from 'react-form-fields/lib/createFormField';
import createReduxFormField from 'react-form-fields/lib/createReduxFormField';
import { getValidateForQuestion } from '../../utils/validate';

const TextField = createReduxFormField(createFormField(Input));

function TextAnswerComponent(props) {
  const {
    fieldName,
    question,
    readonly,
  } = props;
  const validate = getValidateForQuestion(question);

  return (
    <Field
      name={fieldName}
      component={TextField}
      validate={validate}
      disabled={readonly}
    />
  );
}

TextAnswerComponent.propTypes = {
  fieldName: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
  readonly: PropTypes.bool,
};

TextAnswerComponent.defaultProps = {
  readonly: false,
};

export default TextAnswerComponent;
export {
  TextField,
};
