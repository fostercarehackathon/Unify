const initialState = {
  id: null,
  subject: null,
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
      return state;

    default:
      return state;
  }
}
