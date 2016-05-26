// load polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// load base styles
// import 'styles/base/all.scss';
// import 'styles/utils/all.scss';
// import { colors, fontFamily } from 'styles/variables';

// deps
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
// import Icons from 'components/partials/Icons';
import routes from './routes';
import configureStore from './store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('app');
const root = (
  <div>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </div>
);

render(root, rootEl);
