import {request} from 'requests';
import qs from 'qs';

const apiUrl = CONFIG.API_URL + '/api';

export function loadConversations(query) {
  const conversationsQuery = qs.stringify(query);
  return request.get(`${apiUrl}/conversations?${conversationsQuery}`);
}
