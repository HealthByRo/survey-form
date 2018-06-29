import TextFieldAnswer from './components/TextFieldAnswer';
import CheckboxFieldAnswer from './components/CheckboxFieldAnswer';
import createChoiceFieldAnswer from './components/ChoiceFieldAnswer';
import {
  TYPE_CHECKBOX,
  // TYPE_MULTICHOICE,
  TYPE_RADIO,
  TYPE_TEXT,
} from './constants';

export const DEFAULT_TYPE = TYPE_TEXT;

export const mapTypeToAnswerComponent = {
  [TYPE_CHECKBOX]: CheckboxFieldAnswer,
  // [TYPE_MULTICHOICE]: createChoiceFieldAnswer('checkbox'),
  [TYPE_RADIO]: createChoiceFieldAnswer('radio'),
  [TYPE_TEXT]: TextFieldAnswer,
};
