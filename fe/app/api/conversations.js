import {request} from 'requests';
import qs from 'qs';

const apiUrl = CONFIG.API_URL;

export function loadConversations(query) {
  const conversationsQuery = qs.stringify(query = {
    status: 'ALL',
    start: 0,
    end: 30
  });

  return request.get(`${apiUrl}/conversations?${conversationsQuery}`);
}
