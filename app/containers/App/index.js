/* eslint-disable react/jsx-props-no-spreading */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NotFound from '../NotFound';
import GlobalStyle from '../../assets/styles/jss/global-styles';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

function App() {
  return (
    <div className="app-container">
      <Switch>
        {Routes.length &&
          Routes.map(route => {
            if (route.private) {
              return <PrivateRoute key={route.path} {...route} />;
            }
            return <PublicRoute key={route.path} {...route} />;
          })}
        <Route path="" component={NotFound} />
      </Switch>
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
}

export default App;
