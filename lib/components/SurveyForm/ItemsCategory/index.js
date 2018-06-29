'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _QuestionField = require('./QuestionField');

var _QuestionField2 = _interopRequireDefault(_QuestionField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ItemsCategory(_ref) {
  var category = _ref.category,
      readonly = _ref.readonly;

  return _react2.default.createElement(
    'div',
    { className: 'survey-form__category' },
    _react2.default.createElement(
      'h3',
      null,
      category.name
    ),
    category.questions.map(function (question) {
      return _react2.default.createElement(_QuestionField2.default, {
        key: question.id,
        question: question,
        readonly: readonly
      });
    })
  );
}

ItemsCategory.propTypes = {
  category: _propTypes2.default.object.isRequired,
  readonly: _propTypes2.default.bool
};

ItemsCategory.defaultProps = {
  readonly: false
};

exports.default = ItemsCategory;