import {request} from 'requests';
import qs from 'qs';

const apiUrl = CONFIG.API_URL;

const conversationsMock = [
  {
    id: 1,
    subject: 'subject1',
    from: 'titi',
    date: '12-01-2016',
    replyIn: 3,
    status: 'read',
    tag: 'pregnancy',
  },
  {
    id: 2,
    subject: 'subject1',
    from: 'titi',
    date: '12-01-2016',
    replyIn: 3,
    status: 'read',
    tag: 'pregnancy',
  },
  {
    id: 3,
    subject: 'subject1',
    from: 'titi',
    date: '12-01-2016',
    replyIn: 3,
    status: 'read',
    tag: 'pregnancy',
  },
  {
    id: 4,
    subject: 'subject1',
    from: 'titi',
    date: '12-01-2016',
    replyIn: 3,
    status: 'read',
    tag: 'pregnancy',
  },
]
export function loadConversations(query) {
  const conversationsQuery = qs.stringify(query);
  return Promise.resolve(conversationsMock);
  // return request.get(`${apiUrl}/conversations/${conversationsQuery}`);
}

