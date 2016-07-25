// deps
import React, { Component } from 'react';

// components
import RequestStatus from 'components/request-status';
import Button from 'components/button';

class ComponentsContainer extends Component {
  testButton() {
    console.log('test button!');
  }

  render() {
    return (
      <div>
        <RequestStatus status="success" />
        <RequestStatus status="error" />

        <div style={{ border: '1px dashed #ccc', padding: '20px' }}>
          <Button onClick={this.testFunc}>SEND</Button>
          <br />
          <Button type="transparent" onClick={this.testFunc}>Cancel</Button>
          <br />
          <Button type="link" onClick={this.testFunc}>Reply</Button>
        </div>
      </div>
    );
  }
}

export default ComponentsContainer;
