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
import {
  setBaseUrl,
  setHeaders,
} from 'api-client';
import {
  reducer as backendReducer,
  sagas,
} from 'redux-connect-backend';
import { reducer as formReducer } from 'redux-form/immutable';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRlYW1AYXJhYmVsLmxhIiwiZXhwIjoxNTAxMTQ1MjIwLCJlbWFpbCI6InRlYW1AYXJhYmVsLmxhIiwib3JpZ19pYXQiOjE1MDExNDQxMjYsInVzZXIiOnsiaWQiOjEsImlkX3N0cmluZyI6IlVTUi0xMDAwMDAwMDAwMDEiLCJmaXJzdF9uYW1lIjoiQXJhYmVsbGEiLCJsYXN0X25hbWUiOiJBZG1pbiIsImVtYWlsIjoidGVhbUBhcmFiZWwubGEiLCJwaG90byI6Imh0dHBzOi8vYXJhYmVsbGEtcm9tYW4tYXBpLWRldi5zMy5hbWF6b25hd3MuY29tOjQ0My9waG90b3MvYXZhdGFyX2FyYWJlbGxhX2MucG5nIiwicm9sZSI6IjkwX2FkbWluIn19.7YmhpvzY_MA8cx7d_BYup7-aQZeBJXu9fGi13U_ZWnw';
setBaseUrl('https://roman-api-feature.arabel.la/api');
setHeaders({
  Authorization: `JWT ${token}`,
});

const reducers = {
  backend: backendReducer,
  form: formReducer,
};

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

sagas.map(sagaMiddleware.run);

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
