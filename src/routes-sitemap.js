import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
  <Switch>
    <Route path='/' />
    <Route path='/templates/all-templates' />
    <Route path='/templates/figma' />
    <Route path='/templates/admin-dashboards' />
    <Route path='/templates/ui-kits' />
    <Route path='/templates/free-templates' />
    <Route path='/templates/premium-templates' />
    <Route path='/templates/react' />
    <Route path='/templates/bootstrap' />
    <Route path='/contact' />
    <Route path='/about' />
  </Switch>
)