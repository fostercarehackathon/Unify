import React, {Component, PropTypes} from 'react';
import {asyncConnect} from 'redux-async-connect';
import {connect} from 'react-redux';

import ConversationsPage from 'pages/conversations-page';
import {loadConversations} from 'actions/conversations';

@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    return dispatch(loadConversations());
  }
}])
@connect(({conversations}) => ({
  conversations: conversations.conversations
}), ({loadConversations}))
export default class ConversationsContainer extends Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired,
  };

  render() {
    return (
      <ConversationsPage {...this.props}/>
    )
  }
}
