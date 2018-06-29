'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = WrappedCheckbox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function WrappedCheckbox(props) {
  var value = props.value,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['value', 'children']);

  return _react2.default.createElement(
    _checkbox2.default,
    _extends({}, restProps, { defaultChecked: value }),
    children
  );
}

WrappedCheckbox.propTypes = {
  value: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired
};

WrappedCheckbox.defaultProps = {
  value: false
};