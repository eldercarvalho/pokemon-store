import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Settings from '../pages/Settings';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default Routes;
