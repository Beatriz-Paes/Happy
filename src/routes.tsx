import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Langing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/app" component={OrphanagesMap}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;