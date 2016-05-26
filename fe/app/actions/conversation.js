import * as conversationApi from 'api/conversation';

export const loadConversation = (conversationId) => ({
  type: 'LOAD_CONVERSATION',
  payload: conversationApi.loadConversation(conversationId)
});
