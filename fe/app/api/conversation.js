import { request } from 'requests';

const apiUrl = CONFIG.API_URL;

export function loadConversation(id) {
  return request.get(`${apiUrl}/conversation/${id}`);
}

export function saveConversation(conversationData) {
  return request.post(`${apiUrl}/conversations`, conversationData);
}
