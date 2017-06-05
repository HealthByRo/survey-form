import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { mapTypeToAnswerComponent } from '../../settings';
import { getFieldName } from '../../utils/survey-item';

export default class SurveyItem extends PureComponent {
  static propTypes = {
    relatedQuestionData: PropTypes.object.isRequired,
    answers: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.initAnswersComponent();
    this.initFieldName();
  }

  getAnswerComponent() {
    const type = this.props.relatedQuestionData.type;
    const answereComponent = mapTypeToAnswerComponent[type];

    if (!answereComponent) {
      throw Error(`Answare component is not defined for type "${type}"`);
    }

    return answereComponent;
  }

  initAnswersComponent() {
    this.answersComponent = this.getAnswerComponent();
  }

  initFieldName() {
    this.fieldName = getFieldName(this.props);
  }

  render() {
    const {
      relatedQuestionData,
      answers,
    } = this.props;
    const AnswerComponent = this.answersComponent;

    return (
      <div>
        <h3>{relatedQuestionData.text}</h3>

        <AnswerComponent
          fieldName={this.fieldName}
          question={relatedQuestionData}
          answers={answers}
        />
      </div>
    );
  }
}
