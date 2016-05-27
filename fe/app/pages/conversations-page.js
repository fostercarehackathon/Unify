// deps
import React, {Component, PropTypes} from 'react';

class ConversationsPage extends Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired,
    children: PropTypes.element
  };

  renderConversations(conversations) {
    if (Object.keys(conversations).length) {
      return conversations.map((conversation)=> {
        return (
          <li>{conversation.id}</li>
        );
      })
    }
  }

  render() {
    return (
      <div className="Conversations">
        <ul>
          {this.renderConversations(this.props.conversations)}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default ConversationsPage;
