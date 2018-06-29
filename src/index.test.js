import SurveyFormContainer, {
  FORM_SAVE_SUCCESS_ACTION,
  FORM_SAVE_FAILED_ACTION,
} from '.';

describe('index export', () => {
  it('should export SurveyFormContainer', () => {
    expect(SurveyFormContainer).toBeDefined();
  });

  it('should export FORM_SAVE_SUCCESS_ACTION', () => {
    expect(FORM_SAVE_SUCCESS_ACTION).toBeDefined();
  });

  it('should export FORM_SAVE_FAILED_ACTION', () => {
    expect(FORM_SAVE_FAILED_ACTION).toBeDefined();
  });
});
