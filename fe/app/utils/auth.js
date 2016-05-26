import { browserHistory } from 'react-router';

import { store } from 'store';
import * as requestConfig from 'requests';
import * as authActions from 'actions/auth';

export function handleLoginSuccess(session) {
  const redirectLocation = store.getState().auth.redirectLocation;
  store.dispatch(authActions.setRedirectLocation(null));
  requestConfig.setToken(session.token);
  localStorage.setItem(CONFIG.TOKEN_HEADER, session.token);
  browserHistory.push(redirectLocation);
}

export function logout() {
  localStorage.removeItem(CONFIG.TOKEN_HEADER);
  window.location.href = '/';
}

export function requireLogin(nextState, replaceState, cb) {
  if (!store.getState().auth.authenticated) {
    const token = localStorage.getItem(CONFIG.TOKEN_HEADER);

    if (token) {
      requestConfig.setToken(token);
      store.dispatch(authActions.loadSession())
        .then(() => {
          cb();
        }, () => {
          logout();
        });
    } else {
      store.dispatch(authActions.setRedirectLocation(nextState.location));
      replaceState('/login');
      cb();
    }
  } else {
    cb();
  }
}
