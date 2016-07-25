import { request } from 'requests';

const apiUrl = CONFIG.API_URL;

export function loadSummary() {
  return request.get(`${apiUrl}/api/conversations/summary`);
}
