import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { Profile, SidebarNav } from './components';

const styles = {
  drawer: {
    width: 240,
    '& @media only screen and (minWidth: 1024px)': {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 10,
  },
  divider: {
    margin: 10,
  },
  nav: {
    marginBottom: 10,
  },
};

const Sidebar = props => {
  const { className, classes, ...rest } = props;

  const pages = [
    {
      title: 'Home',
      href: '/',
      exact: true,
    },
    {
      title: 'Posts',
      href: '/posts',
      exact: false,
    },
  ];

  return (
    <div className={classes.drawer}>
      <div {...rest} className={classes.root}>
        <Profile />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
};

export default injectSheet(styles)(Sidebar);
