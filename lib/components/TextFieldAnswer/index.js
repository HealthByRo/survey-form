'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('redux-form/immutable');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createFormField = require('react-form-fields/lib/createFormField');

var _createFormField2 = _interopRequireDefault(_createFormField);

var _createReduxFormField = require('react-form-fields/lib/createReduxFormField');

var _createReduxFormField2 = _interopRequireDefault(_createReduxFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = (0, _createReduxFormField2.default)((0, _createFormField2.default)(_input2.default));

function TextFieldAnswer(props) {
  var fieldName = props.fieldName,
      readonly = props.readonly,
      label = props.label;


  return _react2.default.createElement(_immutable.Field, {
    name: fieldName,
    label: label,
    component: TextField,
    disabled: readonly
  });
}

TextFieldAnswer.propTypes = {
  fieldName: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  readonly: _propTypes2.default.bool
};

TextFieldAnswer.defaultProps = {
  readonly: false
};

exports.default = TextFieldAnswer;
exports.TextField = TextField;