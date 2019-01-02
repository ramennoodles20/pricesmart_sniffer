import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemNumberDetailClubLevel from '../pages/ItemNumberDetailClubLevel';

const Routes = ({match}) => {
  return (
    <Switch>
      <Route strict path={`${match.path}club/item/:itemNumber`} component={ItemNumberDetailClubLevel}/>
      <Route strict path={`${match.path}club/item/`} component={ItemNumberDetailClubLevel}/>
    </Switch>
  );

}

export default Routes;
