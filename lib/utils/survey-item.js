'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldName = getFieldName;
exports.getFieldInitialValue = getFieldInitialValue;
exports.getSurveyItemIdFromFieldName = getSurveyItemIdFromFieldName;
exports.getSurveyItemUpdatedPayload = getSurveyItemUpdatedPayload;

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIELD_PREFIX = 'surveyItem';
var REMOVE_FIELD_PREFIX_REG = new RegExp('^' + FIELD_PREFIX);

function getFieldName(surveyItem) {
  return '' + FIELD_PREFIX + surveyItem.id;
}

function getFieldInitialValue(surveyItem) {
  var questionType = surveyItem.relatedQuestionData.type;

  switch (questionType) {
    case 'text':
      return surveyItem.text;
    case 'choice':
      return surveyItem.answers[0];
    default:
      return surveyItem.answers;
  }
}

function getSurveyItemIdFromFieldName(fieldName) {
  return fieldName.replace(REMOVE_FIELD_PREFIX_REG, '');
}

function getSurveyItemUpdatedPayload(fieldValue) {
  if ((0, _isArray3.default)(fieldValue)) {
    return { answers: fieldValue };
  }

  if ((0, _isString3.default)(fieldValue)) {
    return { text: fieldValue };
  }

  return { answers: [fieldValue] };
}