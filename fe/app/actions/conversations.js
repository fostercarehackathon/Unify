import * as conversationsApi from 'api/conversations';

export const loadConversations = (query) => ({
  type: 'LOAD_CONVERSATIONS',
  payload: conversationsApi.loadConversations(query)
});
