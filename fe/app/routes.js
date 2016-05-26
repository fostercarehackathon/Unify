import React from 'react';
import { Route } from 'react-router';

import { requireLogin } from 'utils/auth';

import {
  AppContainer,
  MessagesContainer,
  LoginContainer,
  RegisterContainer,
  AccountContainer
} from 'containers';

import AccountLayout from 'layouts/account-layout';

export default () => {
  return (
    <Route>
      <Route path="/" component={AppContainer} onEnter={requireLogin}/>
      <Route path="messages" component={MessagesContainer}/>
      <Route component={AccountLayout}>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
      </Route>
    </Route>
  );
}
