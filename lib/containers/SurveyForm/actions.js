'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formSaveSucceedAction = formSaveSucceedAction;
exports.formSaveFailedAction = formSaveFailedAction;

var _constants = require('./constants');

function formSaveSucceedAction(name) {
  return {
    type: _constants.FORM_SAVE_SUCCESS_ACTION,
    name: name
  };
}

function formSaveFailedAction(name) {
  return {
    type: _constants.FORM_SAVE_FAILED_ACTION,
    name: name
  };
}