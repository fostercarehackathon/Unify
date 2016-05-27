import * as conversationApi from 'api/conversation';

export const loadConversation = (conversation) => ({
  type: 'LOAD_CONVERSATION',
  payload: conversation
});

export const setActiveMessage = (conversationId, messageId) => ({
  type: 'SET_ACTIVE_MESSAGE',
  payload: {
    conversationId,
    messageId
  }
});
