import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewVideo from '../pages/NewVideo';
import NewCategory from '../pages/NewCategory';

const AppRouter: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/new-video" component={NewVideo} />
      <Route path="/new-category" component={NewCategory} />
    </>
  );
};

export default AppRouter;
