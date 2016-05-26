import React, {Component, PropTypes} from 'react';
import {asyncConnect} from 'redux-async-connect';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
//
import {loadSession} from 'actions/auth';


@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    return dispatch(loadSession());
  }
}])
class LoginContainer extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        LOGIN CONTAINER
      </div>
    );
  }
}

export default LoginContainer;