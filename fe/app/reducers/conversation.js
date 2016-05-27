// const initialState = {
//   id: null,
//   lastUpdated: null,
//   messages: []
// };

const initialState = {
  id: 1,
  subject: "hi 2",
  replyIn: 0,
  lastMessageDate: "2016-05-27T00:15:59.283",
  messages: [
   {
     id: 1,
     body: 'hello',
     status: 1,
     date: '2016-05-27T00:15:59.337',
     from: {
       id: 1,
       username: 'vlad.datcu@kalon.ro',
       firstname: 'Vlad',
       lastname: 'Datcu',
       role: 'CW'
     },
     to: {
       id: 2,
       username: 'ionut.radu@kalon.ro',
       firstname: 'Ionut',
       lastname: 'Radu',
       role: 'CW'
     },
     replyType: 0,
     replyIn: 0,
     replyDate: null
   }
 ],
};

export default function conversation(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONVERSATION':
      return Object.assign({}, action.payload);

    // case 'SET_ACTIVE_MESSAGE':
    //   messages.map(item => {
    //     const changedItem = Object.assign({}, item);
    //     changedItem.active = false;
    //
    //     if (changedItem.id === action.payload.messageId) {
    //       changedItem.active = true;
    //     }
    //     return changedItem;
    //   });
    //
    //   return Object.assing({}, state, { messages });

    default:
      return state;
  }
}
