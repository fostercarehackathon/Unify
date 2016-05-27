import * as api from 'api/message';

export const saveMessage = (message) =>({
  type: 'SAVE_MESSAGE',
  payload: api.saveMessage(message)
});