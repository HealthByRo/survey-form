'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldName = getFieldName;
exports.getFieldInitialValue = getFieldInitialValue;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _htmlEntities = require('html-entities');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entities = new _htmlEntities.AllHtmlEntities();

function getFieldName(question) {
  return String(question.id);
}

function getFieldInitialValue(question) {
  var answers = question.answers,
      type = question.meta.type;

  var answer = entities.decode((0, _get3.default)(answers, '0.answer', ''));

  switch (type) {
    case _constants.TYPE_TEXT:
    case _constants.TYPE_RADIO:
      return answer;
    case _constants.TYPE_CHECKBOX:
      return answer === 'Yes';
    case _constants.TYPE_MULTICHOICE:
    default:
      return answers.map(function (item) {
        return item.answer;
      });
  }
}