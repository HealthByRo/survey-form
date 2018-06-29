import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import createFormField from 'react-form-fields/lib/createFormField';
import createReduxFormField from 'react-form-fields/lib/createReduxFormField';

const choiceComponents = {
  radio: createReduxFormField(createFormField(Radio.Group)),
  checkbox: createReduxFormField(createFormField(Checkbox.Group)),
};

export default function createChoiceFieldAnswer(type) {
  const ChoiceComponent = choiceComponents[type];

  function ChoiceFieldAnswer(props) {
    const {
      fieldName,
      label,
      options,
      readonly,
    } = props;

    return (
      <Field
        component={ChoiceComponent}
        disabled={readonly}
        label={label}
        name={fieldName}
        options={options}
      />
    );
  }

  ChoiceFieldAnswer.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    readonly: PropTypes.bool,
  };

  ChoiceFieldAnswer.defaultProps = {
    readonly: false,
  };

  return ChoiceFieldAnswer;
}
