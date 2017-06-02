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
import { reducer as formReducer } from 'redux-form';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6InRlYW1AYXJhYmVsLmxhIiwidXNlcm5hbWUiOiJ0ZWFtQGFyYWJlbC5sYSIsImV4cCI6MTQ5NjUwNzIyNSwib3JpZ19pYXQiOjE0OTYyNDgwMjUsInVzZXIiOnsiaWQiOjEsImlkX3N0cmluZyI6IlVTUi0xMDAwMDAwMDAwMDEiLCJmaXJzdF9uYW1lIjoiQXJhYmVsbGEiLCJsYXN0X25hbWUiOiJBZG1pbiIsImVtYWlsIjoidGVhbUBhcmFiZWwubGEiLCJwaG90byI6bnVsbCwicm9sZSI6IjkwX2FkbWluIn19.VPk3_33cQytIeA44PHWx9_OVFJWetlq6bfoS-JSOS1A';
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
