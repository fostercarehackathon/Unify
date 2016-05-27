import { request } from 'requests';

const apiUrl = CONFIG.API_URL + '/api/users';

export function load(type) {
  return request.get(`${apiUrl}?role=${type}`);
}
