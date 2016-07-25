import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginPage from 'pages/login-page';
import * as AuthActions from 'actions/auth';

@connect(null,(dispatch) => ({
  actions: bindActionCreators(AuthActions, dispatch)
}))
class LoginContainer extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  render() {
    return (
      <LoginPage actions={this.props.actions} />
    );
  }
}

export default LoginContainer;
