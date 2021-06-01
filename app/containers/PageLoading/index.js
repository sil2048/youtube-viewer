import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Loading from 'components/Loading';
import styles from './styles';

function PageLoading(props) {
  const { classes } = props;
  return (
    <div className={`${classes.root} ${classes.loading}`}>
      <Loading size="medium" colors={['#828DF1', null, '#9ECDEF']} />
    </div>
  );
}

PageLoading.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(PageLoading);
