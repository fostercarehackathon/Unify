import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import request from './request';
import auth from './auth';
import users from './users';
import conversation from './conversation';
import conversations from './conversations';
import summary from './summary';

export default combineReducers({
  routing,
  form: formReducer,
  request,
  users,
  reduxAsyncConnect,
  auth,
  conversation,
  conversations,
  summary
});
