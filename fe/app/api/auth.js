import { request } from 'requests';

const apiUrl = CONFIG.API_URL + '/api/auth';

export function login(email, password) {
  return request.post(`${apiUrl}/signin`, {
    username:email,
    password
  });
}

export function loadSession() {
  return request.get(`${apiUrl}/session`);
}

export function registerAccount(data) {
  return request.post(`${apiUrl}/signup`, data);
}
