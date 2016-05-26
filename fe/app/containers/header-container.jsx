// deps
import React, { Component, PropTypes } from 'react';

// components
import RequestStatus from 'components/request-status';

class HeaderContainer extends Component {
  static propTypes = {
  };

  render() {
    const requestStatus = 'success';

    return (
      <div>
        <RequestStatus status={requestStatus} />
        HEADER CONTAINER
      </div>
    );
  }
}

export default HeaderContainer;
