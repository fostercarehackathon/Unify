import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import request from './request';

export default combineReducers({
  routing,
  form: formReducer,
  request
});
