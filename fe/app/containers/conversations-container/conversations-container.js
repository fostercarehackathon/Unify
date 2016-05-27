import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import ConversationsPage from 'pages/conversations-page';

// actions
import { loadConversations } from 'actions/conversations';
import { loadSummary } from 'actions/summary';

@asyncConnect([{
  promise: ({ store: { dispatch }}) => {
    return Promise.all([
      dispatch(loadConversations()),
      dispatch(loadSummary())
    ]);
  }
}])
@connect((store) => ({
  conversations: store.conversations.conversations,
  summary: store.summary
}), ({ loadConversations }))
export default class ConversationsContainer extends Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired,
    summary: PropTypes.object.isRequired
  };

  render() {
    console.log('??? SUMMARY @ ', this.props.summary);

    return (
      <ConversationsPage {...this.props} />
    );
  }
}
