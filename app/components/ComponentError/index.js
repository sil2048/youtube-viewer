import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import { SadFace } from 'assets/icons';

import styles from './styles';

const withStyles = injectSheet(styles);

function ComponentError(props) {
  const { children, classes } = props;
  return (
    <div className={`${classes.root} ${classes.error}`}>
      <div>
        <SadFace />
      </div>
      <div className={classes.errorContent}>{children}</div>
      <div className={classes.arrorActions}>
        <Link to="/">
          <button type="button" className={classes.blueButton}>
            Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}

ComponentError.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
};

export default withStyles(ComponentError);
