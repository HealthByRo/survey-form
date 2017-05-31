import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _isEqual from 'lodash/isEqual';
import { Map } from 'immutable';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import {} from './selectors';
// import {} from './actions';
// import {} from './utils';

// const mapStateToProps = createStructuredSelector({
//   dataSource: makeSelectData(name),
//   dataMeta: makeSelectDataMeta(name),
//   loading: makeSelectIsLoading(name),
// });

// const mapDispatchToProps = (dispatch) => ({
//   register: () => dispatch(registerTableAction(name)),
//   unregister: () => dispatch(unregisterTableAction(name)),
//   onLoadData: (params) => dispatch(requestLoadDataAction(name, fetchDataMethod, params)),
// });

// @connect(mapStateToProps, mapDispatchToProps)
export default class SurveyForm extends PureComponent {
  static propTypes = {
    // register: PropTypes.func.isRequired,
    // unregister: PropTypes.func.isRequired,
    // onLoadData: PropTypes.func.isRequired,
    // fixedFilters: PropTypes.object,
  };

  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div>
        <h1>SurveyForm</h1>
      </div>
    );
  }
}
