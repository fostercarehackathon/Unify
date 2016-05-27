import * as conversationApi from 'api/conversation';
import * as messageApi from 'api/message';

export const loadConversation = (id) => ({
  type: 'LOAD_CONVERSATION',
  payload: conversationApi.loadConversation(id)
});

export const sendMessage = (conversationId, messageBody, To, replyIn) => ({
  type: 'POST_MESSAGE',
  payload: messageApi.saveMessage({
    body: messageBody,
    conversationId,
    replyIn,
    to: To
  })
});

export const setActiveMessage = (conversationId, messageId) => ({
  type: 'SET_ACTIVE_MESSAGE',
  payload: {
    conversationId,
    messageId
  }
});
