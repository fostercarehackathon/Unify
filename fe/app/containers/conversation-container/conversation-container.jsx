// deps
import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ConversationActions from 'actions/conversation';

// components
import Icon from 'components/icon';
import Overlay from 'components/overlay';

// subcomponents
import ConversationMessage from 'components/conversation-message';

// styles
import './conversation-container.scss';

@asyncConnect([{
  promise: ({store: {dispatch}, params: {id}}) => {
    return dispatch(ConversationActions.loadConversation(id));
  }
}])
@connect(
  (store) => ({
    conversation: store.conversation
  }),
  (dispatch) => ({
    actions: bindActionCreators(ConversationActions, dispatch)
  })
)
class ConversationContainer extends Component {
  static propTypes = {
    conversation: PropTypes.object,
    messages: PropTypes.array
  };

  renderMessages() {
    const { messages } = this.props;

    return messages.map(item => (<ConversationMessage message={item} />));
  }

  render() {
    const { id, lastMessage } = this.props.conversation;

    return (
      <Overlay className="ConversationContainer" isOpen={id ? true : false }>
        <div className="ConversationContainer-Header">
          <Icon
            className="ConversationContainer-Icon"
            onClick={(ev) => console.log(ev)}
            name="chevron-left" />
          <p className="ConversationContainer-ConversationDetails">Conversation Details</p>
          <p className="ConversationContainer-LastMessage">Last message: {lastMessage}</p>
        </div>
      </Overlay>
    );
  }
}

export default ConversationContainer;
