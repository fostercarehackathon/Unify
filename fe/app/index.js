// load polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// load base styles
import 'styles/main.scss';

// deps
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-async-connect'

// import Icons from 'components/partials/Icons';
import routes from './routes';
import configureStore from './store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('app');

const component = (
  <Router render={(props) =>
        <ReduxAsyncConnect {...props}/>
      } history={history}>
    {routes(store)}
  </Router>
);

const root = (
  <div>
    <Provider store={store} key="provider">
      {component}
    </Provider>
  </div>
);

render(root, rootEl);
