import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App.jsx';
import HomePage from '../pages/Homepage.jsx';
import GoodsPage from '../pages/GoodsPage.jsx';

const Routers = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="homepage" component={HomePage} />
        <Route path="goodspage/(:goodscategory)" component={GoodsPage} />
      </Route>
    </Router>
  );
};

export default Routers;
