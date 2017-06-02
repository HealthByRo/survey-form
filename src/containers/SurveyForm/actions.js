import {
  FORM_SAVE_SUCCEED_ACTION,
  FORM_SAVE_FAILED_ACTION,
} from './constants';

export function formSaveSucceedAction(name) {
  return {
    type: FORM_SAVE_SUCCEED_ACTION,
    name,
  };
}

export function formSaveFailedAction(name) {
  return {
    type: FORM_SAVE_FAILED_ACTION,
    name,
  };
}
