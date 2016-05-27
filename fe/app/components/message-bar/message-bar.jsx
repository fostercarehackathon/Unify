// deps
import React, { PropTypes, Component } from 'react';

// components
import Button from 'components/button';
import Icon from 'components/icon';

// style
import './message-bar.scss';

// component
export default class MessageBar extends Component {
  composeMessage() {
    console.log('new message bro!');
  }

  render() {
    return (
      <div className="MessageBar">
        <Button onClick={this.composeMessage} type="transparent">
          <Icon name="pencil" />
          Compose message...
        </Button>
      </div>
    );
  }
}
