// const initialState = {
//   id: null,
//   lastUpdated: null,
//   messages: []
// };

const initialState = {
  id: null,
  subject: null,
  replyIn: 0,
  lastMessageDate: Date.now(),
  messages: []
};

export default function conversation(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONVERSATION':
      return Object.assign({}, action.payload);

    case 'SET_ACTIVE_MESSAGE':
      messages.map(item => {
        const changedItem = Object.assign({}, item);
        changedItem.active = false;

        if (changedItem.id === action.payload.messageId) {
          changedItem.active = true;
        }
        return changedItem;
      });

      return Object.assing({}, state, { messages });

    default:
      return state;
  }
}
