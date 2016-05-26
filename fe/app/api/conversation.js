import { request } from 'requests';

const apiUrl = CONFIG.API_URL;

export function loadConversation(id) {
  return request.get(`${apiUrl}/conversation/${id}`);
}

export function postConversation() {
  // @TODO
}
