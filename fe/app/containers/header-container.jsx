// deps
import React, { Component, PropTypes } from 'react';

// components
import RequestStatus from 'components/request-status';

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
        header container here
      </div>
    );
  }
}

export default HeaderContainer;
