import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Trip from './pages/Trip';
import Trips from './pages/Trips';
import SuccessfulScheduling from './pages/SuccessfulScheduling';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trip" exact component={Trip} />
      <Route path="/trips" exact component={Trips} />
      <Route path="/successful-scheduling" exact component={SuccessfulScheduling} />
    </Switch>
  );
}
