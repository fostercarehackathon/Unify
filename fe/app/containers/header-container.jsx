// deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import RequestStatus from 'components/request-status';
import UserBar from 'components/user-bar';
import MessageBar from 'components/message-bar';

import * as MessageActions from 'actions/message';

@connect(null,(dispatch) => ({
  actions: bindActionCreators(MessageActions, dispatch)
}))
class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <RequestStatus status="error" />
        <UserBar username="Brandon" />
        <MessageBar {...this.props}/>
      </div>
    );
  }
}

export default HeaderContainer;
