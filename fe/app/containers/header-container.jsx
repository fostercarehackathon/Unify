// deps
import React, { Component, PropTypes } from 'react';

// components
import RequestStatus from 'components/request-status';
import UserBar from 'components/user-bar';

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
        header container here
      </div>
    );
  }
}

export default HeaderContainer;
