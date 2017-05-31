import { fromJS } from 'immutable';

import {
  REGISTER_TABLE_ACTION,
  UNREGISTER_TABLE_ACTION,
  REQUEST_LOAD_DATA_ACTION,
  LOAD_DATA_SUCCEED_ACTION,
  LOAD_DATA_FAILED_ACTION,
} from './constants';

const initialState = fromJS({
  lastParams: {},
});

function tableContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_TABLE_ACTION:
      return onRegisterTableAction(state, action);
    case UNREGISTER_TABLE_ACTION:
      return onUnregisterTableAction(state, action);
    case REQUEST_LOAD_DATA_ACTION:
      return onRequestLoadDataAction(state, action);
    case LOAD_DATA_SUCCEED_ACTION:
      return onLoadDataSucceedAction(state, action);
    case LOAD_DATA_FAILED_ACTION:
      return onLoadDataFailedAction(state);
    default:
      return state;
  }
}

function onRegisterTableAction(state, action) {
  const { name } = action;

  if (state.get(name)) {
    console.error(`"Table container with given name (${name}) already exists."`);
    return state;
  }

  const tableContainer = fromJS({
    loading: false,
    dataMeta: {},
    data: [],
  });

  return state.set(name, tableContainer);
}

function onUnregisterTableAction(state, action) {
  return state.delete(action.name);
}

function onRequestLoadDataAction(state, action) {
  const {
    name,
    params,
  } = action;

  return state
    .setIn(['lastParams', name], params)
    .mergeIn([name], {
      loading: true,
    });
}

function onLoadDataSucceedAction(state, action) {
  const {
    name,
    payload,
  } = action;

  return state.mergeIn([name], {
    loading: false,
    dataMeta: payload.meta,
    data: payload.data,
  });
}

function onLoadDataFailedAction(state) {
  return state.mergeIn([name], {
    loading: false,
  });
}

export default tableContainerReducer;
