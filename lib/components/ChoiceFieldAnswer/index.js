'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChoiceFieldAnswer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('redux-form/immutable');

var _radio = require('antd/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createFormField = require('react-form-fields/lib/createFormField');

var _createFormField2 = _interopRequireDefault(_createFormField);

var _createReduxFormField = require('react-form-fields/lib/createReduxFormField');

var _createReduxFormField2 = _interopRequireDefault(_createReduxFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var choiceComponents = {
  radio: (0, _createReduxFormField2.default)((0, _createFormField2.default)(_radio2.default.Group)),
  checkbox: (0, _createReduxFormField2.default)((0, _createFormField2.default)(_checkbox2.default.Group))
};

function createChoiceFieldAnswer(type) {
  var ChoiceComponent = choiceComponents[type];

  function ChoiceFieldAnswer(props) {
    var fieldName = props.fieldName,
        label = props.label,
        options = props.options,
        readonly = props.readonly;


    return _react2.default.createElement(_immutable.Field, {
      component: ChoiceComponent,
      disabled: readonly,
      label: label,
      name: fieldName,
      options: options
    });
  }

  ChoiceFieldAnswer.propTypes = {
    fieldName: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      value: _propTypes2.default.string.isRequired,
      label: _propTypes2.default.string.isRequired
    })).isRequired,
    readonly: _propTypes2.default.bool
  };

  ChoiceFieldAnswer.defaultProps = {
    readonly: false
  };

  return ChoiceFieldAnswer;
}