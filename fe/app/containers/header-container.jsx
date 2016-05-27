// deps
import React, { Component, PropTypes } from 'react';

// components
import RequestStatus from 'components/request-status';
import UserBar from 'components/user-bar';
import MessageBar from 'components/message-bar';

class HeaderContainer extends Component {
  static propTypes = {
  };

  testButton() {
    console.log('test button!');
  }

  render() {
    return (
      <div>
        <RequestStatus status="success" />
        <UserBar username="Brandon" />
        <MessageBar />
        header container here
      </div>
    );
  }
}

export default HeaderContainer;
