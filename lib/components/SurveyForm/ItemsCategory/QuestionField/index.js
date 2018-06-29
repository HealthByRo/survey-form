'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _settings = require('../../../../settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionField = (_temp = _class = function (_PureComponent) {
  _inherits(QuestionField, _PureComponent);

  function QuestionField(props) {
    _classCallCheck(this, QuestionField);

    var _this = _possibleConstructorReturn(this, (QuestionField.__proto__ || Object.getPrototypeOf(QuestionField)).call(this, props));

    var type = _this.getType();

    _this.fieldComponent = _settings.mapTypeToAnswerComponent[type];

    if (!_this.fieldComponent) {
      throw Error('Unrecognized type "' + type + '" of question');
    }
    return _this;
  }

  _createClass(QuestionField, [{
    key: 'getType',
    value: function getType() {
      return (0, _get3.default)(this.props.question, 'meta.type', _settings.DEFAULT_TYPE);
    }
  }, {
    key: 'getFieldName',
    value: function getFieldName() {
      return String(this.props.question.id);
    }
  }, {
    key: 'getChoices',
    value: function getChoices() {
      var choices = (0, _get3.default)(this.props.question, 'meta.choices');

      if (choices) {
        return choices.map(function (choice) {
          return {
            label: choice,
            value: choice
          };
        });
      }

      return null;
    }
  }, {
    key: 'hasChoices',
    value: function hasChoices() {
      return Boolean(this.getChoices());
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          question = _props.question,
          readonly = _props.readonly;

      var FieldComponent = this.fieldComponent;

      return _react2.default.createElement(FieldComponent, {
        fieldName: this.getFieldName(),
        label: question.text,
        options: this.getChoices(),
        readonly: readonly
      });
    }
  }]);

  return QuestionField;
}(_react.PureComponent), _class.propTypes = {
  question: _propTypes2.default.object.isRequired,
  readonly: _propTypes2.default.bool
}, _class.defaultProps = {
  readonly: false
}, _temp);
exports.default = QuestionField;