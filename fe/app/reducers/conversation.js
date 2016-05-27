// const initialState = {
//   id: null,
//   lastUpdated: null,
//   messages: []
// };

const initialState = {
  id: 1,
  lastUpdated: null,
  messages: [
    {
      id: 200
    }
  ]
};

export default function conversation(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONVERSATION_SUCCESS':
      return {
        ...state,
        session: action.payload,
        authenticated: true
      };

    case 'LOAD_CONVERSATION_FAILED':
      return initialState;
    default:
      return state;
  }
}
