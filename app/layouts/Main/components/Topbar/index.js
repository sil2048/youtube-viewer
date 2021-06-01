/* eslint-disable react/no-unescaped-entities */
import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

// Externals
import { compose } from 'redux';
import auth from 'utils/auth';
import { resetLogin } from 'containers/SignIn/services';

// Component styles
import styles from './styles';

const Topbar = props => {
  const { onResetLogin, history, classes } = props;

  const handleSignOut = () => {
    onResetLogin();
    auth.clearToken();
    history.push('/signin');
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>Sil's YTV</div>
      <div className={classes.topRight}>
        <button
          className={classes.signOutButton}
          onClick={handleSignOut}
          type="button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

Topbar.propTypes = {
  history: PropTypes.object.isRequired,
  onResetLogin: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

const mapDispatchToProps = {
  onResetLogin: resetLogin,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withStyle = injectSheet(styles);

export default compose(
  withConnect,
  memo,
  withRouter,
  withStyle,
)(Topbar);
