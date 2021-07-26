import React from 'react';
import { Switch } from 'react-router-dom';
import Order from '../pages/Order';
import Orders from '../pages/Orders';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Orders} />
    <Route path='/order' exact component={Orders} />
    <Route path='/order/:id' exact component={Order} />
  </Switch>
);
export default Routes;
