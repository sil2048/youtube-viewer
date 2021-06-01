import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { auth } from 'utils';
import { Main as MainLayout } from 'layouts';

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  const user = auth.getUserInfo();
  const token = auth.getToken();

  const authenticated = user && token;

  return (
    <Route
      {...rest}
      render={renderProps =>
        authenticated ? (
          <MainLayout>
            <Component {...renderProps} />
          </MainLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  location: PropTypes.object,
};

export default PrivateRoute;
