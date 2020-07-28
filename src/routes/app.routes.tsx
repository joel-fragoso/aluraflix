import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

const AppRouter: React.FC = () => {
  return <Route exact path="/" component={Home} />;
};

export default AppRouter;
