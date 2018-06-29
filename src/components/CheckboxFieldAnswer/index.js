import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import createFormField from 'react-form-fields/lib/createFormField';
import createReduxFormField from 'react-form-fields/lib/createReduxFormField';
import Checkbox from './Checkbox';

const CheckboxField = createReduxFormField(createFormField(Checkbox));

function CheckboxFieldAnswer(props) {
  const {
    fieldName,
    label,
    readonly,
  } = props;

  return (
    <div>
      <Field
        component={CheckboxField}
        disabled={readonly}
        name={fieldName}
      >
        {label}
      </Field>
    </div>
  );
}

CheckboxFieldAnswer.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  readonly: PropTypes.bool,
};

CheckboxFieldAnswer.defaultProps = {
  readonly: false,
};

export default CheckboxFieldAnswer;
