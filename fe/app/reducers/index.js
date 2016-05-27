import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import request from './request';
import auth from './auth';
import conversation from './conversation';

export default combineReducers({
  routing,
  form: formReducer,
  request,
  reduxAsyncConnect,
  auth,
  conversation
});
