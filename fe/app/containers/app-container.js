// deps
import React, { Component, PropTypes } from 'react';
import {asyncConnect} from 'redux-async-connect';
import { connect } from 'react-redux';
// components
import HeaderContainer from 'containers/header-container';

import {load as loadUsers} from 'actions/users';

@asyncConnect([{
  promise: ({store: {getState, dispatch}}) => {
    return dispatch(loadUsers(getState().auth.session.role));
  }
}])
@connect(({users}) => users)
export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    console.log('*****', this.props.users);
    return (
      <div>
        <HeaderContainer users={this.props.users}/>
        { this.props.children }
      </div>
    );
  }
}
