const initialState = {
  all: 0,
  read: 0,
  unread: 0
};

export default function conversations(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_SUMMARY_SUCCESS':
      return {
        ...state,
        ...action.payload,
        all: (action.payload.read + action.payload.unread)
      };

    case 'LOAD_SUMMARY_FAILED':
      return initialState;

    default:
      return state;
  }
}
