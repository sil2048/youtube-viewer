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
    private: false,
    component: loadable(() => import('containers/Home'), {
      fallback: <LoadingIndicator />,
    }),
  },
  {
    title: 'Posts',
    path: '/posts',
    exact: true,
    private: true,
    component: loadable(() => import('containers/Posts'), {
      fallback: <LoadingIndicator />,
    }),
  },
  {
    title: 'Detail',
    path: '/posts/:id',
    exact: false,
    private: true,
    component: loadable(() => import('containers/Posts/Detail'), {
      fallback: <LoadingIndicator />,
    }),
  },
];

export default Routes;
