import React from 'react';
import 'babel-polyfill';
import {
  configure,
  addDecorator,
} from '@kadira/storybook';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import LocaleProvider from 'antd/lib/locale-provider/';
import enUS from 'antd/lib/locale-provider/en_US';
// import {
//   reducer as tableContainerReducer,
//   sagas,
// } from '../src/';

// const reducers = {
//   tableContainer: tableContainerReducer,
// };

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({});//reducers
const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

// sagas.map(sagaMiddleware.run);

addDecorator((story) => (
  <Provider store={store}>
    {story()}
  </Provider>
));

addDecorator((story) => (
  <LocaleProvider locale={enUS}>
    {story()}
  </LocaleProvider>
));

const req = require.context('../src/', true, /\.stories\.js?$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
