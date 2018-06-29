// import React from 'react';
// import { CALL_API_ACTION } from 'redux-connect-backend';
// import { mountWithStore } from 'react-unit-testing-utils';
import SurveyFormContainer from './index';
// import { surveyItems } from '../../../scripts/test-data.js';

describe('<SurveyFormContainer />', () => {
  it('to be defined', () => {
    expect(SurveyFormContainer).toBeDefined();
  });
  // describe('when mount SurveyFormContainer', () => {
  //   // let wrapper;
  //   // const initialState = {
  //   //   backend: {
  //   //     getAllSurveyItems: {
  //   //       processing: false,
  //   //       data: surveyItems,
  //   //     },
  //   //   },
  //   // };

  //   // beforeEach(() => {
  //   //   wrapper = mountWithStore(<SurveyFormContainer surveyId="123" />, initialState);
  //   // });

  //   // it('should NOT dispatch any update survey item action when none of them has been changed', () => {
  //   //   const { store } = wrapper.node.context;

  //   //   wrapper.find('form').simulate('submit');

  //   //   store.getActions().forEach((action) => {
  //   //     expect(action.type === CALL_API_ACTION && action.namespace === 'updateSurveyItem').toBeFalsy();
  //   //   });
  //   // });

  //   // it('should dispatch update survey item action when none of them has been changed', () => {
  //   //   const { store } = wrapper.node.context;

  //   //   wrapper.find('input[name="surveyItem467"]').simulate('change', { target: { value: 'Note test' } });
  //   //   wrapper.find('.ant-radio-input').first().simulate('change', { target: { checked: false } });

  //   //   wrapper.find('form').simulate('submit');

  //   //   // console.log(store.getActions());

  //   //   store.getActions().forEach((action) => {
  //   //     expect(action.type === CALL_API_ACTION && action.namespace === 'updateSurveyItem').toBeFalsy();
  //   //   });
  //   // });
  // });
});
