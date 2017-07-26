import apiClient from 'api-client';
import MockAdapter from 'axios-mock-adapter';
import { getSurvey } from './';


describe('surveys API functions', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(apiClient);
  });

  describe('when calling getSurvey', () => {
    const surveyId = 123;
    const getSurveyResponse = {
      id: surveyId,
    };

    it('should return promise and resolve it with getSurveyResponse', (done) => {
      mock.onGet(`/surveys/${surveyId}`).reply(200, getSurveyResponse);

      getSurvey(surveyId)
        .then((response) => {
          expect(response.data).toEqual(getSurveyResponse);
          done();
        });
    });
  });
});
