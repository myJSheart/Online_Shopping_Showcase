import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App.jsx';
import HomePage from '../pages/Homepage.jsx';

const Routers = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="homepage" Component={HomePage} />
      </Route>
    </Router>
  );
};

export default Routers;
