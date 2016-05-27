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
      const newMessages = action.payload.messages.slice(0);
      newMessages[0].active = true;
      return Object.assign({}, action.payload, { messages: newMessages });

    case 'LOAD_CONVERSATION_FAIL':
      return Object.assign({}, initialState);


    case 'POST_MESSAGE_SUCCESS':


      const newPostMessages = action.payload;
      newPostMessages[0].active = true;
      return Object.assign({}, action.payload, { messages: newPostMessages });

    case 'POST_MESSAGE_FAIL':
      return Object.assign({}, initialState);


    case 'SET_ACTIVE_MESSAGE':
      let currentMessages = state.messages.slice(0);
      currentMessages = currentMessages.map(item => {
        const newItem = Object.assign({}, item);

        newItem.active = false;

        console.log(newItem.id, 'vs', action.payload.messageId);

        if (action.payload.messageId === newItem.id) {
          console.log('l-am gasit');
          newItem.active = true;
        }

        return newItem;
      });

      return Object.assign({}, state, { messages: currentMessages });

    default:
      return state;
  }
}
