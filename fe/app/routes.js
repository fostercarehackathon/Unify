import React from 'react';
import { Route } from 'react-router';

import {
  AppContainer,
} from 'containers';

const routes = (
  <Route>
    <Route path="/" component={AppContainer}/>
  </Route>
);

export default routes;
