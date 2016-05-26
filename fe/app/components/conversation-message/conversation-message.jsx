// deps
import React, { Component, PropTypes } from 'react';
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
          <li className="CMD-ReceivedDate">{receiveDate}</li>
          <li className="CMD-BodyLarge">{body}</li>
        </ul>

        <textarea>Textarea</textarea>
      </div>
    );
  }
}

export default ConversationMessage;
