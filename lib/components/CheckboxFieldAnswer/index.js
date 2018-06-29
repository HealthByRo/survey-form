'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('redux-form/immutable');

var _createFormField = require('react-form-fields/lib/createFormField');

var _createFormField2 = _interopRequireDefault(_createFormField);

var _createReduxFormField = require('react-form-fields/lib/createReduxFormField');

var _createReduxFormField2 = _interopRequireDefault(_createReduxFormField);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxField = (0, _createReduxFormField2.default)((0, _createFormField2.default)(_Checkbox2.default));

function CheckboxFieldAnswer(props) {
  var fieldName = props.fieldName,
      label = props.label,
      readonly = props.readonly;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _immutable.Field,
      {
        component: CheckboxField,
        disabled: readonly,
        name: fieldName
      },
      label
    )
  );
}

CheckboxFieldAnswer.propTypes = {
  fieldName: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  readonly: _propTypes2.default.bool
};

CheckboxFieldAnswer.defaultProps = {
  readonly: false
};

exports.default = CheckboxFieldAnswer;