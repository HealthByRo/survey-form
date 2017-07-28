import apiClient from 'api-client';
import MockAdapter from 'axios-mock-adapter';
import {
  getAllSurveyItems,
  updateSurveyItem,
} from './';

describe('surveys API functions', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(apiClient);
  });

  describe('when calling getAllSurveyItems(surveyId, params = {})', () => {
    const surveyId = 123;
    const getSurveyItemsResponse = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ];

    it('should make request with ordering params and return promise and resolve it with getSurveyResponse', (done) => {
      mock.onGet(`/surveys/${surveyId}/items`, { params: { ordering: 'position' } }).reply(200, getSurveyItemsResponse);

      getAllSurveyItems(surveyId)
        .then((response) => {
          expect(response.data).toEqual(getSurveyItemsResponse);
          done();
        });
    });

    it('should make request with passed ordering params and return promise and resolve it with getSurveyResponse', (done) => {
      mock.onGet(`/surveys/${surveyId}/items`, { params: { ordering: '-id', some: 'other' } }).reply(200, getSurveyItemsResponse);

      getAllSurveyItems(surveyId, { ordering: '-id', some: 'other' })
        .then((response) => {
          expect(response.data).toEqual(getSurveyItemsResponse);
          done();
        });
    });
  });

  describe('when calling updateSurveyItem(surveyId, id, data)', () => {
    const surveyId = 123;
    const surveyItemId = 22;
    const updatedSurveyItem = {
      id: surveyItemId,
      updated: true,
    };

    it('should return promise and resolve it with updatedSurveyItem', (done) => {
      mock.onPatch(`/surveys/${surveyId}/items/${surveyItemId}`).reply(204, updatedSurveyItem);

      updateSurveyItem(surveyId, surveyItemId, updatedSurveyItem)
        .then((response) => {
          expect(response.data).toEqual(updatedSurveyItem);
          done();
        });
    });
  });
});
