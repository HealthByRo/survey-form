import { createSelector } from 'reselect';

const makeSelectTableContainer = (tableName) => (state) => state.getIn(['tableContainer', tableName]);

const makeSelectData = (tableName) => createSelector(
  makeSelectTableContainer(tableName),
  (substate) => (substate && substate.get('data').toJS()) || []
);

const makeSelectDataMeta = (tableName) => createSelector(
  makeSelectTableContainer(tableName),
  (substate) => (substate && substate.get('dataMeta').toJS()) || {}
);

const makeSelectIsLoading = (tableName) => createSelector(
  makeSelectTableContainer(tableName),
  (substate) => substate && substate.get('loading')
);

const makeSelectLastParams = (tableName) => (state) => state.getIn(['tableContainer', 'lastParams', tableName]);

export default makeSelectTableContainer;
export {
  makeSelectData,
  makeSelectDataMeta,
  makeSelectIsLoading,
  makeSelectLastParams,
};
