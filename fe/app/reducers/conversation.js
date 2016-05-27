const initialState = {
  id: null,
  subject: '',
  replyIn: 0,
  lastMessageDate: Date.now(),
  messages: []
};

export default function conversation(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONVERSATION_SUCCESS':
      return Object.assign({}, action.payload);

    case 'LOAD_CONVERSATION_FAIL':
      return Object.assign({}, initialState);

    case 'SET_ACTIVE_MESSAGE':
      let messages = this.state.messages.slice(0);
      messages = messages.map((item) => {
        const newItem = Object.assign({}, item);
        newItem.active = false;

        if (newItem.id === action.payload.messageId) {
          newItem.active = true;
        }
        return newItem;
      });

      return Object.assign({}, state, { messages });

    default:
      return state;
  }
}
