import apiClient from 'api-client';

export function getSurvey(id) {
  return apiClient.get(`/surveys/${id}`);
}
