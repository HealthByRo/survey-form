import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import {
  DEFAULT_TYPE,
  mapTypeToAnswerComponent,
} from '~/settings';

export default class QuestionField extends PureComponent {
  static propTypes = {
    question: PropTypes.object.isRequired,
    readonly: PropTypes.bool,
  };

  static defaultProps = {
    readonly: false,
  };

  constructor(props) {
    super(props);
    const type = this.getType();

    this.fieldComponent = mapTypeToAnswerComponent[type];

    if (!this.fieldComponent) {
      throw Error(`Unrecognized type "${type}" of question`);
    }
  }

  getType() {
    return _get(this.props.question, 'meta.type', DEFAULT_TYPE);
  }

  getFieldName() {
    return String(this.props.question.id);
  }

  getChoices() {
    const choices = _get(this.props.question, 'meta.choices');

    if (choices) {
      return choices.map((choice) => ({
        label: choice,
        value: choice,
      }));
    }

    return null;
  }

  hasChoices() {
    return Boolean(this.getChoices());
  }

  render() {
    const {
      question,
      readonly,
    } = this.props;
    const FieldComponent = this.fieldComponent;

    return (
      <FieldComponent
        fieldName={this.getFieldName()}
        label={question.text}
        options={this.getChoices()}
        readonly={readonly}
      />
    );
  }
}
