import { mapTypeToAnswerComponent } from './settings';
import TextFieldAnswer from './components/TextFieldAnswer';
import CheckboxFieldAnswer from './components/CheckboxFieldAnswer';
import {
  TYPE_CHECKBOX,
  TYPE_MULTICHOICE,
  TYPE_RADIO,
  TYPE_TEXT,
} from './constants';

describe('settings', () => {
  describe('mapTypeToAnswerComponent', () => {
    it('should TYPE_CHECKBOX map to TextFieldAnswer a component', () => {
      expect(mapTypeToAnswerComponent[TYPE_TEXT]).toBe(TextFieldAnswer);
    });

    it('should TYPE_CHECKBOX map to TextFieldAnswer a component', () => {
      expect(mapTypeToAnswerComponent[TYPE_CHECKBOX]).toBe(CheckboxFieldAnswer);
    });

    it('should TYPE_RADIO map to a component', () => {
      expect(typeof mapTypeToAnswerComponent[TYPE_RADIO]).toBe('function');
    });

    it('should TYPE_MULTICHOICE map to a component', () => {
      expect(typeof mapTypeToAnswerComponent[TYPE_MULTICHOICE]).toBe('function');
    });
  });
});
