import { required as requiredValidator } from 'validators/lib/required';

export function getValidateForQuestion(question) {
  const validate = [];

  if (question.required) {
    validate.push(requiredValidator);
  }

  return validate;
}
