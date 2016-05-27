// deps
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import autobind from 'autobind-decorator';

// components
import ConversationItem from 'components/conversation-item';

class ConversationsPage extends Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired,
    children: PropTypes.element,

    push: PropTypes.func
  };

  @autobind
  onConversationClick(conversation) {
    console.log('show conversation @ ', conversation);

    browserHistory.push(`/conversations/${conversation.id}`);
  }

  renderConversations(conversations) {
    console.log('conversations @ ', conversations);

    if (!Object.keys(conversations).length) {
      return null;
    }

    // map conversations
    return conversations.map((conversation, key) => (
      <ConversationItem
        key={`conversation-${key}`}
        message={conversation}
        onClick={this.onConversationClick.bind(this, conversation)}
      />
    ));
  }

  render() {
    const conversations = this.renderConversations(this.props.conversations);

    return (
      <div className="ConversationsPage app-wrapper">
        <div className="MessagesMenu">
          <div className="MessagesMenu-TotalMessages">Your messages 26</div>
          <ul>
            <li>Unread 1</li>
            <li>Read 24</li>
          </ul>
        </div>

        <div className="Conversations">
          {conversations}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ConversationsPage;
