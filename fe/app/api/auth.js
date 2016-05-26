import { request } from 'requests';

const apiUrl = CONFIG.API_URL + '/api/auth';

export function login(email, password) {
  return request.post(`${apiUrl}/signin`, {
    email,
    password
  });
}

export function loadSession() {
  return Promise.resolve({ok: true});
  // return request.get(`${apiUrl}/session`);
}

export function registerAccount(data) {
  return Promise.resolve(data);
  // return request.post(`${apiUrl}/signup`, data);
}
