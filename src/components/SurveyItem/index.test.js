import React from 'react';
import { shallow } from 'enzyme';
import SurveyItem from './';
import { mapTypeToAnswerComponent } from '../../settings';

describe('SurveyItem', () => {
  describe('when render SurveyItem with relatedQuestionData of type "text"', () => {
    let wrapper;
    const props = {
      id: 123,
      relatedQuestionData: {
        type: 'text',
        text: 'Question text',
      },
      answers: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };

    beforeEach(() => {
      wrapper = shallow(<SurveyItem {...props} />);
    });

    it('should render survey item with TextAnswerComponent"', () => {
      expect(wrapper.find(mapTypeToAnswerComponent.text).length).toBe(1);
    });

    it('should TextAnswerComponent has props', () => {
      expect(wrapper.find(mapTypeToAnswerComponent.text).props()).toEqual({
        answers: props.answers,
        fieldName: `surveyItem${props.id}`,
        question: props.relatedQuestionData,
      });
    });

    it('should render question text', () => {
      expect(wrapper.find('h3').text()).toBe(props.relatedQuestionData.text);
    });
  });

  it('should render survey item with ChoiceAnswareComponent component for question type "choice"', () => {
    const relatedQuestionData = { type: 'choice' };
    const wrapper = shallow(<SurveyItem relatedQuestionData={relatedQuestionData} answers={[]} />);

    expect(wrapper.find(mapTypeToAnswerComponent.choice).length).toBe(1);
  });

  it('should render survey item with MultichoiceAnswareComponent component for question type "multichoice"', () => {
    const relatedQuestionData = { type: 'multichoice' };
    const wrapper = shallow(<SurveyItem relatedQuestionData={relatedQuestionData} answers={[]} />);

    expect(wrapper.find(mapTypeToAnswerComponent.multichoice).length).toBe(1);
  });

  it('should throw error when type of the question is not supported', () => {
    const relatedQuestionData = { type: 'unknown' };

    expect(() => {
      shallow(<SurveyItem relatedQuestionData={relatedQuestionData} answers={[]} />);
    }).toThrowError('Answare component is not defined for type "unknown"');
  });
});
