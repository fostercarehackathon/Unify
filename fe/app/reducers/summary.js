const initialState = {
  summary: []
};

export default function conversations(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_SUMMARY':
      return {
        ...state,
        summary: action.payload
      };

    case 'LOAD_SUMMARY_FAILED':
      return initialState;

    default:
      return state;
  }
}
