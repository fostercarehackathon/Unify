const initialState = {
  loadingInstances: 0,
  isLoading: false
};

export default function request(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_LOAD':
      {
        const loadingInstances = state.loadingInstances + 1;

        return {
          ...state,
          loadingInstances,
          isLoading: loadingInstances > 0
        };
      }

    case 'REQUEST_FINISH_LOADING':
      {
        const loadingInstances = state.loadingInstances - 1;

        return {
          ...state,
          loadingInstances,
          isLoading: loadingInstances > 0
        };
      }

    default:
      return state;
  }
}
