// deps
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import cx from 'classnames';

// styles
import './conversation-message.scss';

class ConversationMessage extends Component {
  static propTypes = {
    active: PropTypes.bool,
    message: PropTypes.object
  };

  render() {
    const { active, message } = this.props;
    const { from, body, receiveDate } = message;

    return (
      <div className={
        cx({
          ConversationMessage: true,
          ...active
        })
      }
      >
        <ul className="ConversationMessage-Details">
          <li className="CMD-From">{from}</li>
          <li className="CMD-Body">{body}</li>
          <li className="CMD-ReceivedDate">
            {moment(receiveDate).startOf('hour').fromNow()} - {moment(receiveDate).format('HH:MM')}
          </li>
          <li className="CMD-BodyLarge">{}</li>
        </ul>

        <textarea>Textarea</textarea>
      </div>
    );
  }
}

export default ConversationMessage;
