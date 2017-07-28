import {
  FORM_SAVE_SUCCESS_ACTION,
  FORM_SAVE_FAILED_ACTION,
} from './constants';

describe('SurveyForm constants', () => {
  it('should FORM_SAVE_SUCCESS_ACTION be a string', () => {
    expect(typeof FORM_SAVE_SUCCESS_ACTION).toBe('string');
  });

  it('should FORM_SAVE_FAILED_ACTION be a string', () => {
    expect(typeof FORM_SAVE_FAILED_ACTION).toBe('string');
  });
});
