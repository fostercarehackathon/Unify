const apiUrl = CONFIG.API_URL + '/api';
import {request} from 'requests';

export function saveMessage(messageData) {
  return request.post(`${apiUrl}/messages`, messageData);
}