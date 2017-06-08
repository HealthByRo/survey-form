import {
  FORM_SAVE_SUCCESS_ACTION,
  FORM_SAVE_FAILED_ACTION,
} from './constants';

export function formSaveSuccessAction(name) {
  return {
    type: FORM_SAVE_SUCCESS_ACTION,
    name,
  };
}

export function formSaveFailedAction(name) {
  return {
    type: FORM_SAVE_FAILED_ACTION,
    name,
  };
}
