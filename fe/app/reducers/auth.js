const initialState = {
  session: null,
  authenticated: false,
  redirectLocation: '/',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        session: action.payload,
        authenticated: true
      };

    case 'LOAD_SESSION_SUCCESS':
      return {
        ...state,
        session: action.payload,
        authenticated: true
      };
    default:
      return state;
  }
}
