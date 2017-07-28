import {
  getFieldName,
  getSurveyItemIdFromFieldName,
  getFieldInitialValue,
  getSurveyItemUpdatedPayload,
} from './survey-item';

describe('utils: survey-item', () => {
  it('should return field name when calling getFieldName(surveyItem)', () => {
    const surveyItem = { id: 123 };
    expect(getFieldName(surveyItem)).toEqual('surveyItem123');
  });

  it('should return field name when calling getSurveyItemIdFromFieldName("surveyItemFirstNameId")', () => {
    expect(getSurveyItemIdFromFieldName('surveyItemfirstNameId')).toEqual('firstNameId');
  });

  describe('getFieldInitialValue(surveyItem)', () => {
    it('should return initial value for survey item when related qauestion is "text" type', () => {
      const surveyItem = {
        relatedQuestionData: {
          type: 'text',
        },
        text: 'Some text value',
      };

      expect(getFieldInitialValue(surveyItem)).toEqual(surveyItem.text);
    });

    it('should return initial value for survey item when related qauestion is "choice" type', () => {
      const surveyItem = {
        relatedQuestionData: {
          type: 'choice',
        },
        text: 'Some text value',
        answers: [
          'one',
          'two',
          'three',
        ],
      };

      expect(getFieldInitialValue(surveyItem)).toEqual(surveyItem.answers[0]);
    });

    it('should return initial value for survey item when related qauestion is any other type', () => {
      const surveyItem = {
        relatedQuestionData: {
          type: 'multichoice',
        },
        text: 'Some text value',
        answers: [
          'one',
          'two',
          'three',
        ],
      };

      expect(getFieldInitialValue(surveyItem)).toEqual(surveyItem.answers);
    });
  });

  describe('getSurveyItemUpdatedPayload(fieldValue)', () => {
    it('should return object with "answers" property which contains array, when "fieldValue" is an array', () => {
      const fieldValue = [1, 2, 3, 4];

      expect(getSurveyItemUpdatedPayload(fieldValue)).toEqual({ answers: fieldValue });
    });

    it('should return object with "text" property which contains text, when "fieldValue" is a string', () => {
      const fieldValue = 'Some text';

      expect(getSurveyItemUpdatedPayload(fieldValue)).toEqual({ text: fieldValue });
    });

    it('should return object with "answers" property which contains array, when "fieldValue" is any other type', () => {
      const fieldValue = 1;

      expect(getSurveyItemUpdatedPayload(fieldValue)).toEqual({ answers: [fieldValue] });
    });
  });
});
