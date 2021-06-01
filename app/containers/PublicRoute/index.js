import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Main as MainLayout, Minimal as MinimalLayout } from '../../layouts';

const PublicRoute = props => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={renderProps => {
        if (rest.path === '/signin') {
          return (
            <MinimalLayout>
              <Component {...renderProps} />
            </MinimalLayout>
          );
        }
        return (
          <MainLayout>
            <Component {...renderProps} />
          </MainLayout>
        );
      }}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

export default PublicRoute;
