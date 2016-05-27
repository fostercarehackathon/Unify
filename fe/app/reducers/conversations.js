const initialState = {
  conversations:[],
};

export default function conversations(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONVERSATIONS_SUCCESS':
      return {
        ...state,
        conversations: action.payload,
      };

    case 'LOAD_CONVERSATIONS_FAILED':
      return initialState;
    default:
      return state;
  }
}
