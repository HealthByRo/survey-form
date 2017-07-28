import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';

const FIELD_PREFIX = 'surveyItem';
const REMOVE_FIELD_PREFIX_REG = new RegExp(`^${FIELD_PREFIX}`);

export function getFieldName(surveyItem) {
  return `${FIELD_PREFIX}${surveyItem.id}`;
}

export function getSurveyItemIdFromFieldName(fieldName) {
  return fieldName.replace(REMOVE_FIELD_PREFIX_REG, '');
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

export function getSurveyItemUpdatedPayload(fieldValue) {
  if (_isArray(fieldValue)) {
    return { answers: fieldValue };
  }

  if (_isString(fieldValue)) {
    return { text: fieldValue };
  }

  return { answers: [fieldValue] };
}
