import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';

export function getFieldName(surveyItem) {
  return `surveyItem${surveyItem.id}`;
}

export function getFieldInitialValue(surveyItem) {
  const questionType = surveyItem.relatedQuestionData.type;

  switch (questionType) {
    case 'text':
      return surveyItem.text;
    case 'choice':
      return surveyItem.answers[0];
    default:
      return surveyItem.answers;
  }
}

export function getSurveyItemIdFromFieldName(fieldName) {
  return fieldName.slice(10);
}

export function getSurveyItemUpdatedPayload(fieldValue) {
  if (_isArray(fieldValue)) {
    return { answers: fieldValue };
  }

  if (_isString(fieldValue)) {
    return { text: fieldValue };
  }

  return { answers: [fieldValue] };
}
