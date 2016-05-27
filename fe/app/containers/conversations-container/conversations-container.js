import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import ConversationsPage from 'pages/conversations-page';

// actions
import { loadConversations } from 'actions/conversations';
import { loadSummary } from 'actions/summary';

function mapStoreToProps(store, ownProps) {
  return {
    conversations: store.conversations.conversations,
    summary: store.summary
  };
}

@asyncConnect([{
  promise: ({ store: { getState, dispatch }}) => {
    const conversationsType = getState().routing.locationBeforeTransitions.query.type || 'all';

    return Promise.all([
      dispatch(loadConversations({ status: conversationsType })),
      dispatch(loadSummary())
    ]);
  }
}])
@connect(mapStoreToProps, ({ loadConversations }))
export default class ConversationsContainer extends Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired,
    summary: PropTypes.object.isRequired
  };

  render() {
    return (
      <ConversationsPage {...this.props} />
    );
  }
}
