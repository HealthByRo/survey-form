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

var _settings = require('../../settings');

var _surveyItem = require('../../utils/survey-item');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SurveyItem = (_temp = _class = function (_PureComponent) {
  _inherits(SurveyItem, _PureComponent);

  function SurveyItem(props) {
    _classCallCheck(this, SurveyItem);

    var _this = _possibleConstructorReturn(this, (SurveyItem.__proto__ || Object.getPrototypeOf(SurveyItem)).call(this, props));

    _this.initAnswersComponent();
    _this.initFieldName();
    return _this;
  }

  _createClass(SurveyItem, [{
    key: 'getAnswerComponent',
    value: function getAnswerComponent() {
      var type = this.props.relatedQuestionData.type;
      var answereComponent = _settings.mapTypeToAnswerComponent[type];

      if (!answereComponent) {
        throw Error('Answare component is not defined for type "' + type + '"');
      }

      return answereComponent;
    }
  }, {
    key: 'initAnswersComponent',
    value: function initAnswersComponent() {
      this.answersComponent = this.getAnswerComponent();
    }
  }, {
    key: 'initFieldName',
    value: function initFieldName() {
      this.fieldName = (0, _surveyItem.getFieldName)(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          relatedQuestionData = _props.relatedQuestionData,
          answers = _props.answers;

      var AnswerComponent = this.answersComponent;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          relatedQuestionData.text
        ),
        _react2.default.createElement(AnswerComponent, {
          fieldName: this.fieldName,
          question: relatedQuestionData,
          answers: answers
        })
      );
    }
  }]);

  return SurveyItem;
}(_react.PureComponent), _class.propTypes = {
  relatedQuestionData: _propTypes2.default.object.isRequired,
  answers: _propTypes2.default.array.isRequired
}, _temp);
exports.default = SurveyItem;