/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Products from './components/Products';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="signin" component={SignIn} hideNavBar initial />
        </Scene>
        <Scene key="welcome">
          <Scene key="dashboard" component={Dashboard} hideNavBar initial />
          <Scene key="products" component={Products} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
