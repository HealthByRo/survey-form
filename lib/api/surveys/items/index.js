'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSurveyItems = getAllSurveyItems;
exports.updateSurveyItem = updateSurveyItem;

var _apiClient = require('api-client');

var _apiClient2 = _interopRequireDefault(_apiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllSurveyItems(surveyId) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = { params: params };
  options.params.ordering = options.params.ordering || 'position';

  return _apiClient2.default.get('/surveys/' + surveyId + '/items', { params: params });
}

function updateSurveyItem(surveyId, id, data) {
  return _apiClient2.default.patch('/surveys/' + surveyId + '/items/' + id, data);
}