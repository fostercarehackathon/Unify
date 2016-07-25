import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RequestAccountPage from 'pages/register-page';
import * as AuthActions from 'actions/auth';

@connect(null,(dispatch) => ({
  actions: bindActionCreators(AuthActions, dispatch)
}))
class RegisterContainer extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  render() {
    return (
      <RequestAccountPage actions={this.props.actions} />
    );
  }
}

export default RegisterContainer;
