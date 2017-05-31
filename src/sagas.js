import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { REQUEST_LOAD_DATA_ACTION } from './constants';
import {
  loadDataSucceedAction,
  loadDataFailedAction,
 } from './actions';
import { getDataPayload } from './utils';

export function* requestLoadDataActionSaga() {
  yield takeEvery(REQUEST_LOAD_DATA_ACTION, loadDataSaga);
}

export function* loadDataSaga(action) {
  const {
    name,
    fetchDataMethod,
    params,
  } = action;

  try {
    const response = yield call(fetchDataMethod, params);
    const data = yield call(getDataPayload, response.data);
    yield put(loadDataSucceedAction(name, data));
  } catch (error) {
    console.error('loadDataFailedAction', error);
    yield put(loadDataFailedAction(error));
  }
}

export default [
  requestLoadDataActionSaga,
];
