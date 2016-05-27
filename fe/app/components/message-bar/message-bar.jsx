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
        <Button
          className="MessageBar-ComposeButton"
          type="transparent"
          onClick={this.composeMessage}
        >
          <Icon name="pencil" />
          <span>Compose message...</span>
        </Button>

        <div className="MessageBar-Composer">
          message composer here
        </div>
      </div>
    );
  }
}
