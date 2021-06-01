import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Topbar from './components/Topbar';

const withStyles = injectSheet({
  root: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    height: '100%',
  },
});

const Minimal = props => {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(Minimal);
