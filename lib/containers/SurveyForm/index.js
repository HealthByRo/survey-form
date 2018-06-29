'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reduxConnectBackend = require('redux-connect-backend');

var _reduxConnectBackend2 = _interopRequireDefault(_reduxConnectBackend);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _forIn2 = require('lodash/forIn');

var _forIn3 = _interopRequireDefault(_forIn2);

var _isBoolean2 = require('lodash/isBoolean');

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _returnDeepDiff = require('return-deep-diff');

var _returnDeepDiff2 = _interopRequireDefault(_returnDeepDiff);

var _SurveyForm = require('../../components/SurveyForm');

var _SurveyForm2 = _interopRequireDefault(_SurveyForm);

var _healthSurvey = require('../../api/health-survey');

var _surveyItem = require('../../utils/survey-item');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = {
  onFormSaveSuccessAction: _actions.formSaveSuccessAction,
  onFormSaveFailedAction: _actions.formSaveFailedAction
};

var mapApiMethodsToActions = {
  getHealthSurvey: _healthSurvey.getHealthSurvey,
  postHealthSurvey: _healthSurvey.postHealthSurvey
};

var SurveyFormContainer = (_dec = (0, _reactRedux.connect)(null, mapDispatchToProps), _dec2 = (0, _reduxConnectBackend2.default)(mapApiMethodsToActions), _dec(_class = _dec2(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(SurveyFormContainer, _PureComponent);

  function SurveyFormContainer(props) {
    var _this2 = this;

    _classCallCheck(this, SurveyFormContainer);

    var _this = _possibleConstructorReturn(this, (SurveyFormContainer.__proto__ || Object.getPrototypeOf(SurveyFormContainer)).call(this, props));

    _this.handleSubmit = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_values) {
        var _this$props, onFormSaveSuccessAction, onFormSaveFailedAction, saveAnswaresPromises, values;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, onFormSaveSuccessAction = _this$props.onFormSaveSuccessAction, onFormSaveFailedAction = _this$props.onFormSaveFailedAction;
                saveAnswaresPromises = [];
                values = _this.processValues(_values);


                (0, _forIn3.default)(values, function (answare, questionId) {
                  var savePromise = _this.saveAnsware(questionId, answare);
                  saveAnswaresPromises.push(savePromise);
                });

                _context.prev = 4;
                _context.next = 7;
                return Promise.all(saveAnswaresPromises);

              case 7:
                onFormSaveSuccessAction(_this.formName);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](4);

                onFormSaveFailedAction(_this.formName);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var memberId = _this.props.memberId;

    _this.formName = 'SurveyForm' + memberId;
    _this.surveyForm = (0, _SurveyForm2.default)(memberId);
    return _this;
  }

  _createClass(SurveyFormContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          memberId = _props.memberId,
          getHealthSurvey = _props.getHealthSurvey;


      getHealthSurvey(memberId);
    }
  }, {
    key: 'getHealthSurvey',
    value: function getHealthSurvey() {
      return this.props.getHealthSurveyResult.data;
    }
  }, {
    key: 'getInitialValues',
    value: function getInitialValues() {
      var surveyItems = this.getHealthSurvey();
      var initialValues = {};

      surveyItems.forEach(function (questionsCategory) {
        questionsCategory.questions.forEach(function (question) {
          var fieldName = (0, _surveyItem.getFieldName)(question);
          initialValues[fieldName] = (0, _surveyItem.getFieldInitialValue)(question);
        });
      });

      return initialValues;
    }
  }, {
    key: 'processValues',
    value: function processValues(_values) {
      var changedValues = (0, _returnDeepDiff2.default)(this.getInitialValues(), _values.toJS());
      var values = {};

      (0, _forIn3.default)(changedValues, function (_value, key) {
        if ((0, _isBoolean3.default)(_value)) {
          values[key] = _value ? 'Yes' : 'No';
        } else {
          values[key] = _value;
        }
      });

      return values;
    }
  }, {
    key: 'saveAnsware',
    value: function saveAnsware(questionId, answare) {
      var _props2 = this.props,
          memberId = _props2.memberId,
          postHealthSurvey = _props2.postHealthSurvey;

      var payload = {
        question: questionId,
        answer: answare
      };

      return postHealthSurvey(memberId, payload);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !(0, _get3.default)(this.getHealthSurvey(), 'length');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          _props3$getHealthSurv = _props3.getHealthSurveyResult,
          processing = _props3$getHealthSurv.processing,
          data = _props3$getHealthSurv.data,
          readonly = _props3.readonly;


      var SurveyForm = this.surveyForm;

      return _react2.default.createElement(
        _spin2.default,
        { spinning: processing },
        !processing && !this.isEmpty() && _react2.default.createElement(SurveyForm, {
          surveyItems: data,
          onSubmit: this.handleSubmit,
          initialValues: this.getInitialValues(),
          readonly: readonly
        }),
        !processing && this.isEmpty() && _react2.default.createElement(
          'p',
          null,
          'No items.'
        )
      );
    }
  }]);

  return SurveyFormContainer;
}(_react.PureComponent), _class2.propTypes = {
  memberId: _propTypes2.default.number.isRequired,
  readonly: _propTypes2.default.bool,
  getHealthSurvey: _propTypes2.default.func.isRequired,
  getHealthSurveyResult: _propTypes2.default.object,
  postHealthSurvey: _propTypes2.default.func.isRequired,
  onFormSaveSuccessAction: _propTypes2.default.func.isRequired,
  onFormSaveFailedAction: _propTypes2.default.func.isRequired
}, _class2.defaultProps = {
  getHealthSurveyResult: null,
  readonly: false
}, _temp)) || _class) || _class);
exports.default = SurveyFormContainer;