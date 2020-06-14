import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Trip from './pages/Trip';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trip" exact component={Trip} />
    </Switch>
  );
}
