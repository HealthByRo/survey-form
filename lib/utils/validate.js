'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidateForQuestion = getValidateForQuestion;

var _required = require('validators/lib/required');

function getValidateForQuestion(question) {
  var validate = [];

  if (question.required) {
    validate.push(_required.required);
  }

  return validate;
}