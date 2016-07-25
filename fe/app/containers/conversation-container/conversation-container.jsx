// deps
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';
import cx from 'classnames';

import * as ConversationActions from 'actions/conversation';

// components
import Icon from 'components/icon';
import Overlay from 'components/overlay';

// subcomponents
import ConversationMessage from 'components/conversation-message';

// styles
import './conversation-container.scss';

@asyncConnect([{
  promise: ({ store: { dispatch }, params: { id } }) => {
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
    actions: PropTypes.object,
    conversation: PropTypes.object,
    params: PropTypes.object
  };

  onBackClick() {
    browserHistory.push(`/conversations`);
  }

  @autobind
  onMessageClick(messageId) {
    const { actions, conversation } = this.props;

    actions.setActiveMessage(conversation.id, messageId);
  }

  @autobind
  onSubmitMessage(conversationId, val, to) {
    const {actions} = this.props;

    actions.sendMessage(conversationId, val, to, 0);
    browserHistory.push('/conversations');
  }

  renderTitleIcon() {
    let replyInIcon = 'checkmark';

//    if (replyIn > )
//    'respond-today' : 'respond-later';

    return (<Icon className={
        cx({
          'ConversationContainer-IconTitle': true
        })
      }
      name={replyInIcon}
    />);
  }

  renderMessages() {
    const { id, messages } = this.props.conversation;

    return messages.map((item, key) => (
      <ConversationMessage
        message={item}
        key={`message-${key}`}
        onClick={this.onMessageClick}
        sendMessage={this.onSubmitMessage}
        conversationId={id}
      />
    ));
  }

  renderLastMessageDate() {
    const { lastMessageDate } = this.props;

    if (!lastMessageDate) {
      return void (0);
    }

    return (
      <p className="ConversationContainer-LastMessage">
        Last message: <strong>{moment(lastMessageDate).startOf('day').fromNow()}</strong>
      </p>
    );
  }

  render() {
    console.log(this.props.conversation);

    const { id, subject } = this.props.conversation;

    return (
      <Overlay className="ConversationContainer" isOpen>
        <div className="ConversationContainer-Header">
          <a className="ConversationContainer-Icon" onClick={this.onBackClick}>
            <Icon name="chevron-left" />
          </a>
          <p className="ConversationContainer-ConversationDetails">Conversation Details</p>
          {this.renderLastMessageDate()}
        </div>

        <h2 className="ConversationContainer-Title">
          {this.renderTitleIcon()}
          {subject}
        </h2>

        <div className="ConversationContainer-Messages">
          {this.renderMessages()}
        </div>
      </Overlay>
    );
  }
}

export default ConversationContainer;
