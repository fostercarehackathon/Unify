// deps
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import autobind from 'autobind-decorator';

// components
import { Grid, GridCell } from 'components/grid';
import ConversationItem from 'components/conversation-item';

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
      <Grid className="ConversationsPage app-wrapper">
        <GridCell className="MessagesMenu" col={2}>
          <div className="MessagesMenu-TotalMessages">
            Your messages <span className="MessagesMenu-Counter">26</span>
          </div>
          <ul>
            <li>All <span className="MessagesMenu-Counter">1</span></li>
            <li>Unread <span className="MessagesMenu-Counter">1</span></li>
            <li>Read <span className="MessagesMenu-Counter">24</span></li>
          </ul>
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
