import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Routes from './Routes';

const topLevelRoutes = () => (
  <Switch>
    <Route path='/:language(es|en)/' component={Routes}/>
    <Route path='/' component={Routes}/>
  </Switch>

)

export default topLevelRoutes;
