import { mapTypeToAnswerComponent } from './settings';
import TextAnswerComponent from './components/TextAnswerComponent';

describe('settings', () => {
  describe('mapTypeToAnswerComponent', () => {
    it('should mapTypeToAnswerComponent.text be a TextAnswerComponent component', () => {
      expect(mapTypeToAnswerComponent.text).toBe(TextAnswerComponent);
    });

    it('should mapTypeToAnswerComponent.choice be a component', () => {
      expect(typeof mapTypeToAnswerComponent.choice).toBe('function');
    });

    it('should mapTypeToAnswerComponent.multichoice be a component', () => {
      expect(typeof mapTypeToAnswerComponent.multichoice).toBe('function');
    });
  });
});
