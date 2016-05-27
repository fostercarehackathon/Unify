const initialState = {
  conversations:[],
};

export default function conversations(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONVERSATIONS_SUCCESS':
      return {
        ...state,
        conversations: action.payload.map((conversation) => {
          return {
            id: conversation.id,
            from: conversation.from.username,
            to: conversation.to.username,
            subject: conversation.subject,
            replyIn: conversation.replyIn,
            lastMessageDate: conversation.lastMessageDate,
            startedDate: conversation.startedDate,
            messages: conversation.messages,
            tags: conversation.tags
          };
        })
      };

    case 'LOAD_CONVERSATIONS_FAILED':
      return initialState;
    default:
      return state;
  }
}
