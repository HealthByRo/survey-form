import apiClient from 'api-client';

export function getHealthSurvey(memberId) {
  return apiClient.get(`/health-survey/${memberId}`);
}

export function postHealthSurvey(memberId, payload) {
  return apiClient.post(`/health-survey/${memberId}`, payload);
}
