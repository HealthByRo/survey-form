'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTypeToAnswerComponent = exports.DEFAULT_TYPE = undefined;

var _mapTypeToAnswerCompo;

var _TextFieldAnswer = require('./components/TextFieldAnswer');

var _TextFieldAnswer2 = _interopRequireDefault(_TextFieldAnswer);

var _CheckboxFieldAnswer = require('./components/CheckboxFieldAnswer');

var _CheckboxFieldAnswer2 = _interopRequireDefault(_CheckboxFieldAnswer);

var _ChoiceFieldAnswer = require('./components/ChoiceFieldAnswer');

var _ChoiceFieldAnswer2 = _interopRequireDefault(_ChoiceFieldAnswer);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_TYPE = exports.DEFAULT_TYPE = _constants.TYPE_TEXT;

var mapTypeToAnswerComponent = exports.mapTypeToAnswerComponent = (_mapTypeToAnswerCompo = {}, _defineProperty(_mapTypeToAnswerCompo, _constants.TYPE_CHECKBOX, _CheckboxFieldAnswer2.default), _defineProperty(_mapTypeToAnswerCompo, _constants.TYPE_RADIO, (0, _ChoiceFieldAnswer2.default)('radio')), _defineProperty(_mapTypeToAnswerCompo, _constants.TYPE_TEXT, _TextFieldAnswer2.default), _mapTypeToAnswerCompo);