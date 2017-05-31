import {
  REGISTER_TABLE_ACTION,
  UNREGISTER_TABLE_ACTION,
  REQUEST_LOAD_DATA_ACTION,
  LOAD_DATA_SUCCEED_ACTION,
  LOAD_DATA_FAILED_ACTION,
} from './constants';

export function registerTableAction(name) {
  return {
    type: REGISTER_TABLE_ACTION,
    name,
  };
}

export function unregisterTableAction(name) {
  return {
    type: UNREGISTER_TABLE_ACTION,
    name,
  };
}

export function requestLoadDataAction(name, fetchDataMethod, params) {
  return {
    type: REQUEST_LOAD_DATA_ACTION,
    name,
    fetchDataMethod,
    params,
  };
}

export function loadDataSucceedAction(name, payload) {
  return {
    type: LOAD_DATA_SUCCEED_ACTION,
    name,
    payload,
  };
}

export function loadDataFailedAction(name, payload) {
  return {
    type: LOAD_DATA_FAILED_ACTION,
    name,
    payload,
  };
}
