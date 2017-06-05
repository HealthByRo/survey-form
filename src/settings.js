import TextAnswerComponent from './components/TextAnswerComponent';
import createChoiceAnswareComponent from './components/ChoiceAnswerComponent';

export const mapTypeToAnswerComponent = {
  text: TextAnswerComponent,
  choice: createChoiceAnswareComponent('radio'),
  multichoice: createChoiceAnswareComponent('checkbox'),
};
