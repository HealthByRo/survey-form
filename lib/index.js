'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORM_SAVE_FAILED_ACTION = exports.FORM_SAVE_SUCCEED_ACTION = exports.SurveyFormContainer = undefined;

var _SurveyForm = require('./containers/SurveyForm');

var _SurveyForm2 = _interopRequireDefault(_SurveyForm);

var _constants = require('./containers/SurveyForm/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SurveyForm2.default;
exports.SurveyFormContainer = _SurveyForm2.default;
exports.FORM_SAVE_SUCCEED_ACTION = _constants.FORM_SAVE_SUCCEED_ACTION;
exports.FORM_SAVE_FAILED_ACTION = _constants.FORM_SAVE_FAILED_ACTION;