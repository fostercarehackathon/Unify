import axios from 'axios';

import { store } from 'store';
import * as requestActions from 'actions/request';
import { logout } from 'utils/auth';

export const request = axios.create({
  baseURL: '/api/health',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const commonHeaders = request.defaults.headers;

export function setToken(token) {
  commonHeaders[CONFIG.TOKEN_HEADER] = token;
}

export function removeToken() {
  delete commonHeaders[CONFIG.TOKEN_HEADER];
}

function isLoginRequestErr(err) {
  return err.config.method === 'post' && err.data.path === '/session';
}

request.interceptors.request.use((config) => {
  store.dispatch(requestActions.load());

  return config;
});

request.interceptors.response.use(
  (res) => {
    store.dispatch(requestActions.finishLoading());

    return res.data;
  },
  (err) => {
    if (err.status === 401 && !isLoginRequestErr(err)) {
      logout();
    }

    store.dispatch(requestActions.finishLoading());

    return Promise.reject(err);
  }
);
