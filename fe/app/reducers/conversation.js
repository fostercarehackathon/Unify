// const initialState = {
//   id: null,
//   lastUpdated: null,
//   messages: []
// };

const initialState = {
  id: 1,
  lastUpdated: Date.now() - 20000,
  title: 'RE: I need help with...',
  messages: [
    {
      id: 200,
      from: 'John Doe',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      receiveDate: Date.now() - 10000
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
