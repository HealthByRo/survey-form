'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHealthSurvey = getHealthSurvey;
exports.postHealthSurvey = postHealthSurvey;

var _apiClient = require('api-client');

var _apiClient2 = _interopRequireDefault(_apiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getHealthSurvey(memberId) {
  return _apiClient2.default.get('/health-survey/' + memberId);
}

function postHealthSurvey(memberId, payload) {
  return _apiClient2.default.post('/health-survey/' + memberId, payload);
}