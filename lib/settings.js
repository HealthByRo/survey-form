'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTypeToAnswerComponent = undefined;

var _TextAnswerComponent = require('./components/TextAnswerComponent');

var _TextAnswerComponent2 = _interopRequireDefault(_TextAnswerComponent);

var _ChoiceAnswerComponent = require('./components/ChoiceAnswerComponent');

var _ChoiceAnswerComponent2 = _interopRequireDefault(_ChoiceAnswerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapTypeToAnswerComponent = exports.mapTypeToAnswerComponent = {
  text: _TextAnswerComponent2.default,
  choice: (0, _ChoiceAnswerComponent2.default)('radio'),
  multichoice: (0, _ChoiceAnswerComponent2.default)('checkbox')
};