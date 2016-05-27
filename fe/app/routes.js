import React from 'react';
import { Route } from 'react-router';

import { requireLogin } from 'utils/auth';

import {
  AppContainer,
  ComponentsContainer,
  MessagesContainer,
  LoginContainer,
  RegisterContainer,
  ConversationContainer,
  ConversationsContainer
} from 'containers';

import AccountLayout from 'layouts/account-layout';

export default () => {
  return (
    <Route>
      <Route path="/" component={AppContainer} onEnter={requireLogin} />
      <Route path="components" component={ComponentsContainer} />
      <Route path="conversations" component={ConversationsContainer}>
        <Route path="conversations/:id" component={ConversationContainer} />
      </Route>
      <Route component={AccountLayout}>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
      </Route>
    </Route>
  );
};
