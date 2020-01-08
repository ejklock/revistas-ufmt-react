import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Painel from '../pages/Painel';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact isHome component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" isPrivate component={Dashboard} />
        <Route path="/painel" isPrivate component={Painel} />
      </Switch>
    </BrowserRouter>
  );
}
