'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSurveyForm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('redux-form/immutable');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _ItemsCategory = require('./ItemsCategory');

var _ItemsCategory2 = _interopRequireDefault(_ItemsCategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

function createSurveyForm(memberId) {
  var _dec, _class, _class2, _temp2;

  var SurveyForm = (_dec = (0, _immutable.reduxForm)({
    form: 'SurveyForm' + memberId
  }), _dec(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(SurveyForm, _Component);

    function SurveyForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SurveyForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyForm.__proto__ || Object.getPrototypeOf(SurveyForm)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (event) {
        if (event && event.preventDefault) {
          event.preventDefault();
        }

        _this.props.handleSubmit();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SurveyForm, [{
      key: 'isSubmitBtnDisabled',
      value: function isSubmitBtnDisabled() {
        var _props = this.props,
            pristine = _props.pristine,
            submitting = _props.submitting,
            valid = _props.valid,
            readonly = _props.readonly;


        return readonly || pristine || submitting || !valid;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            surveyItems = _props2.surveyItems,
            submitting = _props2.submitting,
            readonly = _props2.readonly;


        return _react2.default.createElement(
          'form',
          {
            className: 'survey-form',
            noValidate: true,
            onSubmit: this.onSubmit
          },
          surveyItems.map(function (category) {
            return _react2.default.createElement(
              FormItem,
              {
                className: 'survey-form--category',
                key: category.id
              },
              _react2.default.createElement(_ItemsCategory2.default, { category: category })
            );
          }),
          !readonly && _react2.default.createElement(
            FormItem,
            null,
            _react2.default.createElement(
              _button2.default,
              {
                type: 'primary',
                htmlType: 'submit',
                size: 'large',
                loading: submitting,
                disabled: this.isSubmitBtnDisabled()
              },
              'Save'
            )
          )
        );
      }
    }]);

    return SurveyForm;
  }(_react.Component), _class2.propTypes = {
    handleSubmit: _propTypes2.default.func.isRequired,
    pristine: _propTypes2.default.bool.isRequired,
    readonly: _propTypes2.default.bool,
    submitting: _propTypes2.default.bool.isRequired,
    surveyItems: _propTypes2.default.array.isRequired,
    valid: _propTypes2.default.bool.isRequired
  }, _class2.defaultProps = {
    readonly: false
  }, _temp2)) || _class);


  return SurveyForm;
}