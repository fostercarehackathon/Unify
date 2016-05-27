import * as apiUser from 'api/users';

export const load = (type) => ({
  type: 'USERS',
  payload: apiUser.load(type)
});