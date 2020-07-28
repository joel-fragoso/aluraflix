import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewVideo from '../pages/NewVideo';

const AppRouter: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/new-video" component={NewVideo} />
    </>
  );
};

export default AppRouter;
