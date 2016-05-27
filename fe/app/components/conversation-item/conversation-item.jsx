// deps
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import cx from 'classnames';

// components
import { Grid, GridCell } from 'components/grid';
import Icon from 'components/icon';

// styles
import './conversation-item.scss';

export default class ConversationItem extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired
  };

  getMessageStatusIcon(message) {
    const { replyIn, status } = message;

    if (status === 'read') {
      return 'checkmark';
    }

    if (replyIn > 0) {
      return 'respond-later';
    }

    // default fallback
    return 'respond-today';
  }

  render() {
    const { message } = this.props;
    const messageStatusIcon = this.getMessageStatusIcon(message);

    const conversationItemClasses = cx('ConversationItem', {
      [`ConversationItem--${messageStatusIcon}`]: messageStatusIcon
    });

    return (
      <Grid className={conversationItemClasses}>
        <GridCell className="ConversationItem-StatusIcon" col={1}>
          <Icon name={messageStatusIcon} />
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
