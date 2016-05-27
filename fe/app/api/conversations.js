import {request} from 'requests';
import qs from 'qs';

const apiUrl = CONFIG.API_URL;

const conversationsMock = [
  {
    id: 1,
    subject: 'Bacon ipsum dolor amet turkey ham hock fatback short loin boudin, drumstick pork salami pork loin prosciutto leberkas',
    from: 'John Doe',
    date: '08-28-2016',
    replyIn: 3,
    status: 'read',
    tag: 'pregnancy'
  },
  {
    id: 2,
    subject: 'Corned beef strip steak ribeye, porchetta prosciutto salami shank biltong jowl ball tip brisket beef ribs',
    from: 'John Doe',
    date: '12-01-2016',
    replyIn: null,
    status: 'read',
    tag: 'pregnancy'
  },
  {
    id: 3,
    subject: 'Shoulder tongue turducken spare ribs, tri-tip chuck pork loin drumstick andouille pancetta boudin rump frankfurter sirl',
    from: 'John Doe',
    date: '12-01-2016',
    replyIn: 3,
    status: 'read',
    tag: 'pregnancy'
  },
  {
    id: 4,
    subject: 'Ham beef ribs andouille shoulder alcatra bacon shankle venison t-bone tri-tip doner brisket tongue turducken',
    from: 'John Doe',
    date: '12-01-2016',
    replyIn: 3,
    status: 'read',
    tag: 'pregnancy'
  }
];

export function loadConversations(query) {
  const conversationsQuery = qs.stringify(query);
  return Promise.resolve(conversationsMock);
  // return request.get(`${apiUrl}/conversations/${conversationsQuery}`);
}
