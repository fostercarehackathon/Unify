import React, {Component, PropTypes} from 'react';

export default class MessagesContainer extends Component {
  render() {
    return (
      <div>
        Messages container
        {this.props.children}
      </div>
    )
  }
}