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

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _returnDeepDiff = require('return-deep-diff');

var _returnDeepDiff2 = _interopRequireDefault(_returnDeepDiff);

var _SurveyForm = require('../../components/SurveyForm');

var _SurveyForm2 = _interopRequireDefault(_SurveyForm);

var _actions = require('./actions');

var _items = require('../../api/surveys/items');

var _surveyItem = require('../../utils/survey-item');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = {
  onFormSaveSuccessAction: _actions.formSaveSuccessAction,
  onFormSaveFailedAction: _actions.formSaveFailedAction
};

var mapApiMethodsToActions = {
  getAllSurveyItems: _items.getAllSurveyItems,
  updateSurveyItem: _items.updateSurveyItem
};

var SurveyFormContainer = (_dec = (0, _reactRedux.connect)(null, mapDispatchToProps), _dec2 = (0, _reduxConnectBackend2.default)(mapApiMethodsToActions), _dec(_class = _dec2(_class = (_temp = _class2 = function (_PureComponent) {
  _inherits(SurveyFormContainer, _PureComponent);

  function SurveyFormContainer(props) {
    _classCallCheck(this, SurveyFormContainer);

    var _this = _possibleConstructorReturn(this, (SurveyFormContainer.__proto__ || Object.getPrototypeOf(SurveyFormContainer)).call(this, props));

    var surveyId = _this.props.surveyId;

    _this.formName = 'SurveyForm' + surveyId;
    _this.surveyForm = (0, _SurveyForm2.default)(surveyId);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(SurveyFormContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          surveyId = _props.surveyId,
          getAllSurveyItems = _props.getAllSurveyItems;


      getAllSurveyItems(surveyId);
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(values) {
      var _this2 = this;

      var _props2 = this.props,
          onFormSaveSuccessAction = _props2.onFormSaveSuccessAction,
          onFormSaveFailedAction = _props2.onFormSaveFailedAction;

      var saveItemPromises = [];

      var changedValues = (0, _returnDeepDiff2.default)(this.getInitialValues(), values.toJS());

      (0, _forIn3.default)(changedValues, function (fieldValue, fieldName) {
        var savePromise = _this2.saveItem(fieldValue, fieldName);
        saveItemPromises.push(savePromise);
      });

      return Promise.all(saveItemPromises).then(function () {
        onFormSaveSuccessAction(_this2.formName);
      }).catch(function () {
        onFormSaveFailedAction(_this2.formName);
      });
    }
  }, {
    key: 'getInitialValues',
    value: function getInitialValues() {
      var surveyItems = this.props.getAllSurveyItemsResult.data;
      var initialValues = {};

      surveyItems.forEach(function (surveyItem) {
        var fieldName = (0, _surveyItem.getFieldName)(surveyItem);
        initialValues[fieldName] = (0, _surveyItem.getFieldInitialValue)(surveyItem);
      });

      return initialValues;
    }
  }, {
    key: 'saveItem',
    value: function saveItem(fieldValue, fieldName) {
      var _props3 = this.props,
          surveyId = _props3.surveyId,
          updateSurveyItem = _props3.updateSurveyItem;


      var surveyItemId = (0, _surveyItem.getSurveyItemIdFromFieldName)(fieldName);
      var payload = (0, _surveyItem.getSurveyItemUpdatedPayload)(fieldValue);

      return updateSurveyItem(surveyId, surveyItemId, payload);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !(0, _get3.default)(this.props.getAllSurveyItemsResult, 'data.length');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          _props4$getAllSurveyI = _props4.getAllSurveyItemsResult,
          processing = _props4$getAllSurveyI.processing,
          data = _props4$getAllSurveyI.data,
          readonly = _props4.readonly;


      var SurveyForm = this.surveyForm;

      return _react2.default.createElement(
        _spin2.default,
        { spinning: processing },
        !processing && !this.isEmpty() && _react2.default.createElement(SurveyForm, {
          surveyItems: data,
          onSubmit: this.onSubmit,
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
  surveyId: _propTypes2.default.number.isRequired,
  readonly: _propTypes2.default.bool,
  getAllSurveyItems: _propTypes2.default.func.isRequired,
  getAllSurveyItemsResult: _propTypes2.default.object,
  updateSurveyItem: _propTypes2.default.func.isRequired,
  onFormSaveSuccessAction: _propTypes2.default.func.isRequired,
  onFormSaveFailedAction: _propTypes2.default.func.isRequired
}, _class2.defaultProps = {
  getAllSurveyItemsResult: null,
  readonly: false
}, _temp)) || _class) || _class);
exports.default = SurveyFormContainer;