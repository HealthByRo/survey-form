import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Input from 'antd/lib/input';
import createFormField from 'react-form-fields/lib/createFormField';
import createReduxFormField from 'react-form-fields/lib/createReduxFormField';

const TextField = createReduxFormField(createFormField(Input));

function TextFieldAnswer(props) {
  const {
    fieldName,
    readonly,
    label,
  } = props;

  return (
    <Field
      name={fieldName}
      label={label}
      component={TextField}
      disabled={readonly}
    />
  );
}

TextFieldAnswer.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  readonly: PropTypes.bool,
};

TextFieldAnswer.defaultProps = {
  readonly: false,
};

export default TextFieldAnswer;
export {
  TextField,
};
