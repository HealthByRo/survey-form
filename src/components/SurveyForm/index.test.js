// import React from 'react';
// import { createComponentWithIntl } from 'react-unit-testing-utils';
import createSurveyForm from '.';
// import { surveyItems } from '../../../scripts/test-data.js';

const SurveyForm = createSurveyForm(123);

describe('<SurveyForm />', () => {
  it('to be defined', () => {
    expect(SurveyForm).toBeDefined();
  });
  // it('should render SurveyForm', () => {
  //   const initialState = {};
  //   const { component } = createComponentWithIntl(<SurveyForm surveyItems={surveyItems} />, initialState);
  //   expect(component.toJSON()).toMatchSnapshot();
  // });
});
