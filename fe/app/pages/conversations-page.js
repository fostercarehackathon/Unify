// deps
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import autobind from 'autobind-decorator';

// components
import { Grid, GridCell } from 'components/grid';
import ConversationItem from 'components/conversation-item';
import MessagesSummary from 'components/messages-summary';

// styles
import './conversations-page.scss';

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

    if (Object.keys(conversations).length) {
      return (
        <div className="ConversationsList-NoMessages">
          <div className="ConversationsList-NoMessagesContainer">
            <img src="/app/images/no-messages.png" />
            <p>Messages are coming soon...</p>
          </div>
        </div>
      );
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
      <Grid className="ConversationsPage app-wrapper">
        <GridCell col={2}>
          <MessagesSummary />
        </GridCell>

        <GridCell className="ConversationsList" fit>
          {conversations}
          {this.props.children}
        </GridCell>
      </Grid>
    );
  }
}

export default ConversationsPage;
