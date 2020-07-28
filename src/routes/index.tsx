import React from 'react';
import { Switch } from 'react-router-dom';

import AppRouter from './app.routes';

const Routes: React.FC = () => {
  return (
    <Switch>
      <AppRouter />
    </Switch>
  );
};

export default Routes;
