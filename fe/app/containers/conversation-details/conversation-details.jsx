// deps
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

// components
import Overlay from 'components/overlay';

// subcomponents
import ConversationMessage from 'components/conversation-message';

// styles
import './conversation-details.scss';

class ConversationDetails extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    messages: PropTypes.array
  };

  renderMessages() {
    const { messages } = this.props;

    return messages.map(item => (<ConversationMessage message={item} />));
  }

  render() {
    return (
      <Overlay className="ConversationDetails"
        isOpen={true}>

        <div className="ConversationDetails-Header">

          
        </div>

      </Overlay>
    );
  }
}

export default ConversationDetails;
