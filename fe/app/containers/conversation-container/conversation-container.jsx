// deps
import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import cx from 'classnames';

import {loadConversation} from 'actions/conversation';

// components
import Icon from 'components/icon';
import Overlay from 'components/overlay';

// subcomponents
import ConversationMessage from 'components/conversation-message';

// styles
import './conversation-container.scss';

@asyncConnect([{
  promise: ({store: {dispatch}, params: {id}}) => {
    return dispatch(loadConversation(id));
  }
}])
class ConversationContainer extends Component {
  static propTypes = {
    messages: PropTypes.array
  };

  renderMessages() {
    const { messages } = this.props;

    return messages.map(item => (<ConversationMessage message={item} />));
  }

  render() {
    return (
      <Overlay className="ConversationContainer" isOpen>
        <div className="ConversationContainer-Header">
          <Icon onClick={(ev) => console.log(ev)} name="chevron-left" />
        </div>

      </Overlay>
    );
  }
}

export default ConversationContainer;
