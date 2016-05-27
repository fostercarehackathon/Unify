// deps
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import autobind from 'autobind-decorator';

// components
import {Grid, GridCell} from 'components/grid';
import ConversationItem from 'components/conversation-item';
import MessagesSummary from 'components/messages-summary';

// styles
import './conversations-page.scss';

class ConversationsPage extends Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired,
    summary: PropTypes.object.isRequired,

    children: PropTypes.element,
    push: PropTypes.func
  };

  @autobind
  onConversationClick(conversation) {
    console.log('show conversation @ ', conversation);

    browserHistory.push(`/conversations/${conversation.id}`);
  }

  getMessages(messageType) {
    console.log('>>>> GET MESSAGES of type @ ', messageType);
  }

  renderConversations(conversations) {
    if (!Object.keys(conversations).length) {
      return (
        <div className="ConversationsList-NoMessages">
          <div className="ConversationsList-NoMessagesContainer">
            <img src="/app/images/no-messages.png"/>
            <p>Messages are coming soon...</p>
          </div>
        </div>
      );
    }

    // map conversations
    const convers = conversations.map((conversation, key) => (
      <ConversationItem
        key={`conversation-${key}`}
        message={conversation}
        onClick={this.onConversationClick.bind(this, conversation)}
      />
    ));
    convers.unshift(<div className="ConversationHeader">
      <div className="ConversationHeader-From" >
        From
      </div>
      <div className="ConversationHeader-Expected">
      Expected Response
      </div>
    </div>)
    return convers;
  }

  render() {
    const { summary, conversations } = this.props;
    const conversationsList = this.renderConversations(conversations);

    return (
      <Grid className="ConversationsPage app-wrapper">
        <GridCell col={2}>
          <MessagesSummary items={summary} onItemClick={this.getMessages} />
        </GridCell>

        <GridCell className="ConversationsList" fit>
          {conversationsList}
          {this.props.children}
        </GridCell>
      </Grid>
    );
  }
}

export default ConversationsPage;
