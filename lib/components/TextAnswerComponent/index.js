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

var _validate = require('../../utils/validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = (0, _createReduxFormField2.default)((0, _createFormField2.default)(_input2.default));

function TextAnswerComponent(props) {
  var fieldName = props.fieldName,
      question = props.question,
      readonly = props.readonly;

  var validate = (0, _validate.getValidateForQuestion)(question);

  return _react2.default.createElement(_immutable.Field, {
    name: fieldName,
    component: TextField,
    validate: validate,
    disabled: readonly,
    normalize: normalizer
  });
}

TextAnswerComponent.propTypes = {
  fieldName: _propTypes2.default.string.isRequired,
  question: _propTypes2.default.object.isRequired,
  readonly: _propTypes2.default.bool
};

TextAnswerComponent.defaultProps = {
  readonly: false
};

function normalizer(value) {
  console.log(value);

  return value;
}

exports.default = TextAnswerComponent;
exports.TextField = TextField;