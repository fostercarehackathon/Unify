// deps
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

// components
import { Grid, GridCell } from 'components/grid';

// styles
import './conversation-item.scss';

export default class ConversationItem extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired
  };

  getMessageStatusIcon(replyIn) {
    if (replyIn > 0) {
      return 'respond-later';
    }

    // default fallback
    return 'respond-today';
  }

  render() {
    const { message } = this.props;
    const messageIcon = this.getMessageStatusIcon(message.replyIn);

    console.log('conversation message @ ', this.props.message);

    return (
      <Grid className="ConversationItem">
        <GridCell className="ConversationItem-Status" col={1}>
          {messageIcon}
        </GridCell>

        <GridCell className="ConversationItem-Sender" col={2}>
          {message.from}
        </GridCell>

        <GridCell className="ConversationItem-ReplyIn" col={2}>
          {(message.replyIn > 0) ? `In ${message.replyIn} days` : 'Today'}
        </GridCell>

        <GridCell className="ConversationItem-Subject" fit>
          {message.subject}
        </GridCell>

        <GridCell className="ConversationItem-Date" col={1}>
          {moment(message.date).format('MMM D, Y')}
        </GridCell>
      </Grid>
    );
  }
}
