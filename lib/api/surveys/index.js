'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSurvey = getSurvey;

var _apiClient = require('api-client');

var _apiClient2 = _interopRequireDefault(_apiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSurvey(id) {
  return _apiClient2.default.get('/surveys/' + id);
}