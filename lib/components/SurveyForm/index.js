'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var _SurveyItem = require('../SurveyItem');

var _SurveyItem2 = _interopRequireDefault(_SurveyItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;

function createSurveyForm(surveyId) {
  var SurveyForm = function SurveyForm(props) {
    var surveyItems = props.surveyItems,
        handleSubmit = props.handleSubmit,
        pristine = props.pristine,
        submitting = props.submitting,
        valid = props.valid;


    var onSubmit = function onSubmit(event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      if (valid) {
        handleSubmit();
      }
    };

    return _react2.default.createElement(
      'form',
      { onSubmit: onSubmit, noValidate: true },
      surveyItems.map(function (surveyItem) {
        return _react2.default.createElement(
          FormItem,
          { key: surveyItem.id },
          _react2.default.createElement(
            _SurveyItem2.default,
            surveyItem,
            surveyItem.id
          )
        );
      }),
      _react2.default.createElement(
        FormItem,
        null,
        _react2.default.createElement(
          _button2.default,
          {
            type: 'primary',
            htmlType: 'submit',
            size: 'large',
            loading: submitting,
            disabled: pristine || submitting || !valid
          },
          'SAVE'
        )
      )
    );
  };

  SurveyForm.propTypes = {
    handleSubmit: _propTypes2.default.func.isRequired,
    pristine: _propTypes2.default.bool.isRequired,
    submitting: _propTypes2.default.bool.isRequired,
    valid: _propTypes2.default.bool.isRequired,
    surveyItems: _propTypes2.default.array.isRequired
  };

  return (0, _immutable.reduxForm)({
    form: 'SurveyForm' + surveyId
  })(SurveyForm);
}