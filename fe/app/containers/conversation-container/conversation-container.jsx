// deps
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
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

  onBackClick() {
    console.log('we go back');
  }

  renderTitleIcon() {
    const respondTime = true === false ? 'respond-today' : 'respond-later';

    return (<Icon className="ConversationContainer-IconTitle" name={respondTime} />);
  }

  renderMessages() {
    const { messages } = this.props.conversation;

    return messages.map((item, key) => (
      <ConversationMessage message={item} key={`message-${key}`} />
    ));
  }

  render() {
    const { id, lastUpdated, title } = this.props.conversation;

    return (
      <Overlay className="ConversationContainer" isOpen={id ? true : false }>
        <div className="ConversationContainer-Header">
          <a className="ConversationContainer-Icon" onClick={this.onBackClick}>
            <Icon name="chevron-left" />
          </a>
          <p className="ConversationContainer-ConversationDetails">Conversation Details</p>
          <p className="ConversationContainer-LastMessage">
            Last message: <strong>{moment(lastUpdated).startOf('day').fromNow()}</strong>
          </p>
        </div>

        <h2 className="ConversationContainer-Title">
          {this.renderTitleIcon()}
          {title}
        </h2>

        <div className="ConversationContainer-Messages">
          {this.renderMessages()}
        </div>
      </Overlay>
    );
  }
}

export default ConversationContainer;
