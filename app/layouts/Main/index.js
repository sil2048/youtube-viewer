import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { Sidebar, Topbar, Footer } from './components';

const withStyles = injectSheet({
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
    width: '100%',
    background: '#f9f9f9',
  },
});

function Main(props) {
  const { children, classes } = props;

  return (
    <>
      <Topbar />
      <div className={classes.mainContainer}>
        <Sidebar />
        <main className={classes.content}>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(Main);
