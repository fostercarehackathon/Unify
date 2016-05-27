// deps
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'autobind-decorator';
import cx from 'classnames';

import * as ConversationActions from 'actions/conversation';

// components
import Icon from 'components/icon';
import Overlay from 'components/overlay';

// subcomponents
// import ConversationMessage from 'components/conversation-message';

// styles
import './conversation-container.scss';

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
    console.log('we go back');
  }

  @autobind
  onMessageClick(messageId) {
    console.log('click on', messageId);
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
    const { messages } = this.props.conversation;

    return messages.map((item, key) => (
      // <ConversationMessage message={item} key={`message-${key}`} onClick={this.onMessageClick} />
      <div>message</div>
    ));
  }

  render() {
    const { id, lastMessageDate, subject } = this.props.conversation;

    if (!id) {
      return null;
    }

    return (
      <Overlay className="ConversationContainer" isOpen>
        <div className="ConversationContainer-Header">
          <a className="ConversationContainer-Icon" onClick={this.onBackClick}>
            <Icon name="chevron-left" />
          </a>
          <p className="ConversationContainer-ConversationDetails">Conversation Details</p>
          <p className="ConversationContainer-LastMessage">
            Last message: <strong>{moment(lastMessageDate).startOf('day').fromNow()}</strong>
          </p>
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
