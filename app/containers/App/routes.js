import React from 'react';
import loadable from 'utils/loadable';
import { LoadingIndicator } from 'components';

const Routes = [
  {
    title: 'Sign In',
    path: '/signin',
    exact: true,
    private: false,
    component: loadable(() => import('containers/SignIn'), {
      fallback: <LoadingIndicator />,
    }),
  },
  {
    title: 'Home',
    path: '/',
    exact: true,
    private: true,
    component: loadable(() => import('containers/Home'), {
      fallback: <LoadingIndicator />,
    }),
  },
];

export default Routes;
