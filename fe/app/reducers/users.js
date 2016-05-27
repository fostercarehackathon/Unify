const initialState = {
  users: [],
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
