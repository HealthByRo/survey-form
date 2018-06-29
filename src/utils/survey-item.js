import _get from 'lodash/get';
import { AllHtmlEntities as Entities } from 'html-entities';
import {
  TYPE_CHECKBOX,
  TYPE_MULTICHOICE,
  TYPE_RADIO,
  TYPE_TEXT,
} from '../constants';

const entities = new Entities();

export function getFieldName(question) {
  return String(question.id);
}

export function getFieldInitialValue(question) {
  const {
    answers,
    meta: {
      type,
    },
  } = question;
  const answer = entities.decode(_get(answers, '0.answer', ''));

  switch (type) {
    case TYPE_TEXT:
    case TYPE_RADIO:
      return answer;
    case TYPE_CHECKBOX:
      return answer === 'Yes';
    case TYPE_MULTICHOICE:
    default:
      return answers.map((item) => item.answer);
  }
}
