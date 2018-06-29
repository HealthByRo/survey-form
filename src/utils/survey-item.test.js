import {
  getFieldName,
  getFieldInitialValue,
} from './survey-item';

describe('utils: survey-item', () => {
  it('should return field name when calling getFieldName(question)', () => {
    const question = { id: 123 };
    expect(getFieldName(question)).toEqual('123');
  });

  describe('getFieldInitialValue(question)', () => {
    it('should return initial value for survey item when question type is "text" ', () => {
      const question = {
        meta: {
          type: 'text',
        },
        answers: [{
          answer: 'Foo',
        }],
      };

      expect(getFieldInitialValue(question)).toEqual(question.answers[0].answer);
    });

    it('should return initial value for survey item when question type is "radio" ', () => {
      const question = {
        meta: {
          type: 'radio',
        },
        answers: [{
          answer: 'Foo',
        }],
      };

      expect(getFieldInitialValue(question)).toEqual(question.answers[0].answer);
    });

    it('should return initial value for survey item when question type is "checkbox" and answer is "Yes"', () => {
      const question = {
        meta: {
          type: 'checkbox',
        },
        answers: [{
          answer: 'Yes',
        }],
      };

      expect(getFieldInitialValue(question)).toBeTruthy();
    });

    it('should return initial value for survey item when question type is "checkbox" and answer is "No"', () => {
      const question = {
        meta: {
          type: 'checkbox',
        },
        answers: [{
          answer: 'No',
        }],
      };

      expect(getFieldInitialValue(question)).toBeFalsy();
    });

    it('should return initial value for survey item when question type is "multichoice"', () => {
      const question = {
        meta: {
          type: 'multichoice',
        },
        answers: [{
          answer: 'Foo',
        }, {
          answer: 'Bar',
        }],
      };

      expect(getFieldInitialValue(question)).toEqual(['Foo', 'Bar']);
    });
  });
});
