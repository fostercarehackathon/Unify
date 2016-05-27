import * as conversationApi from 'api/conversation';

export const loadConversation = (id) => ({
  type: 'LOAD_CONVERSATION',
  payload: conversationApi.loadConversation(id)
});

export const setActiveMessage = (conversationId, messageId) => ({
  type: 'SET_ACTIVE_MESSAGE',
  payload: {
    conversationId,
    messageId
  }
});
