import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLoggerMiddleware from 'redux-logger';
import rootReducer from './reducers';

export let store;

export default function configureStore(initialState) {
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware({
        promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILED']
      }),
      createLoggerMiddleware()
    )
  );
  return store;
}
