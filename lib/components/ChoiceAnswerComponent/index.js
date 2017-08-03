'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChoiceAnswareComponent;

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

var _validate = require('../../utils/validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var choiceComponents = {
  radio: (0, _createReduxFormField2.default)((0, _createFormField2.default)(_radio2.default.Group)),
  checkbox: (0, _createReduxFormField2.default)((0, _createFormField2.default)(_checkbox2.default.Group))
};

function createChoiceAnswareComponent(type) {
  var ChoiceComponent = choiceComponents[type];

  function ChoiceAnswerComponent(props) {
    var fieldName = props.fieldName,
        question = props.question,
        readonly = props.readonly;

    var options = mapQuestionAnswersToOptions(question.answers);
    var validate = (0, _validate.getValidateForQuestion)(question);

    return _react2.default.createElement(_immutable.Field, {
      name: fieldName,
      options: options,
      component: ChoiceComponent,
      validate: validate,
      disabled: readonly
    });
  }

  ChoiceAnswerComponent.propTypes = {
    fieldName: _propTypes2.default.string.isRequired,
    question: _propTypes2.default.object.isRequired,
    readonly: _propTypes2.default.bool
  };

  ChoiceAnswerComponent.defaultProps = {
    readonly: false
  };

  return ChoiceAnswerComponent;
}

function mapQuestionAnswersToOptions(choices) {
  return choices.map(function (choice) {
    return {
      value: choice.id,
      label: choice.text
    };
  });
}