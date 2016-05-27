import * as authApi from 'api/auth';

export const setRedirectLocation = (location) => ({
  type: 'SET_REDIRECT_LOCATION',
  payload: location
});

export const login = (email, password) => ({
  type: 'LOGIN',
  payload: authApi.login(email, password)
});

export const loadSession = () => ({
  type: 'LOAD_SESSION',
  payload: authApi.loadSession()
});

export const registerAccount = (data) => ({
  type: 'REQUEST_ACCOUNT',
  payload: authApi.registerAccount(data)
});