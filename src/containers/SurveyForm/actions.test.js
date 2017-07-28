import {
  formSaveSuccessAction,
  formSaveFailedAction,
} from './actions';
import {
  FORM_SAVE_SUCCESS_ACTION,
  FORM_SAVE_FAILED_ACTION,
} from './constants';

describe('SurveyForm actions', () => {
  const name = 'someFormName';

  it('formSaveSuccessAction(name) should return action with FORM_SAVE_SUCCESS_ACTION type and name', () => {
    const expected = {
      type: FORM_SAVE_SUCCESS_ACTION,
      name,
    };

    expect(formSaveSuccessAction(name)).toEqual(expected);
  });

  it('formSaveFailedAction(name) should return action with FORM_SAVE_FAILED_ACTION type and name', () => {
    const expected = {
      type: FORM_SAVE_FAILED_ACTION,
      name,
    };

    expect(formSaveFailedAction(name)).toEqual(expected);
  });
});
