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

        <div style={{ border: '1px dashed #ccc', padding: '20px' }}>
          <Button onClick={this.testFunc}>SEND</Button>
          <br/>
          <Button type="transparent" onClick={this.testFunc}>Cancel</Button>
          <br/>
          <Button type="link" onClick={this.testFunc}>Reply</Button>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
