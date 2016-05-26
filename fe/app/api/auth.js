import { request } from 'requests';

const apiUrl = CONFIG.API_URL;

export function login(email, password) {
  return request.post(`${apiUrl}/session`, {
    email,
    password
  });
}

export function loadSession() {
  return request.get(`${apiUrl}/session`);
}

export function registerAccount(data) {
  return Promise.resolve(data);
  // return request.post(`${apiUrl}/account/request`, data);
}
