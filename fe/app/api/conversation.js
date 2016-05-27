import { request } from 'requests';

const apiUrl = CONFIG.API_URL + '/api';

export function loadConversation(id) {
  return request.get(`${apiUrl}/conversations/${id}`);
}

export function saveConversation(conversationData) {
  return request.post(`${apiUrl}/conversations`, conversationData);
}
