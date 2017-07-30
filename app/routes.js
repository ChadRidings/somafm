/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ChannelPage from './containers/ChannelPage';
import SettingsPage from './containers/SettingsPage';

export default () => (
  <App>
    <Switch>
      <Route path="/channels" component={HomePage} />
      <Route path="/channel" component={ChannelPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
