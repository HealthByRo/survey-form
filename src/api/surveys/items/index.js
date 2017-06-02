import apiClient from 'api-client';

export function getAllSurveyItems(surveyId, params = {}) {
  const options = { params };
  options.params.ordering = options.params.ordering || 'position';

  return apiClient
    .get(`/surveys/${surveyId}/items`, { params });
}

export function updateSurveyItem(surveyId, id, data) {
  return apiClient
    .patch(`/surveys/${surveyId}/items/${id}`, data);
}
