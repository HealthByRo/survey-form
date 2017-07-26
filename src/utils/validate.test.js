import { required as requiredValidator } from 'validators/lib/required';
import { getValidateForQuestion } from './validate';

describe('validate', () => {
  describe('getValidateForQuestion', () => {
    it('should return list of validators with "required" validator if question is required', () => {
      const question = { required: true };
      const validators = getValidateForQuestion(question);

      expect(validators).toEqual([requiredValidator]);
    });

    it('should return emoty list of validators if question is not required', () => {
      const question = { required: false };
      const validators = getValidateForQuestion(question);

      expect(validators).toEqual([]);
    });

    it('should return emoty list of validators if question has not required property', () => {
      const question = {};
      const validators = getValidateForQuestion(question);

      expect(validators).toEqual([]);
    });
  });
});
