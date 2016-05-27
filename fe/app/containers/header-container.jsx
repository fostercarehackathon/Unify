// deps
import React, { Component, PropTypes } from 'react';

// components
import RequestStatus from 'components/request-status';
import Button from 'components/button';

class HeaderContainer extends Component {
  static propTypes = {
  };

  testButton() {
    console.log('test button!');
  }

  render() {
    // const requestStatus = 'success';

    return (
      <div>
        <RequestStatus status="success" />
        <RequestStatus status="error" />

        <Button onClick={this.testFunc}>SEND</Button>
        <Button type="transparent" onClick={this.testFunc}>SEND</Button>
        <Button type="link" onClick={this.testFunc}>SEND</Button>
      </div>
    );
  }
}

export default HeaderContainer;
