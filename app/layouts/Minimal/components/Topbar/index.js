import React, { memo } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'react-jss';

// Externals
import { compose } from 'redux';
import auth from 'utils/auth';
import { resetLogin } from 'containers/SignIn/services';

import { ReactComponent as Logo } from '../../../../assets/images/logo.svg';

// Component styles
import styles from './styles';

const withStyle = withStyles(styles);

const Topbar = props => {
  const { onResetLogin, history, classes, ...rest } = props;

  const user = auth.getUserInfo();
  const token = auth.getToken();

  const authenticated = rest.isAuthenticated || (user && token);

  const handleSignOut = () => {
    onResetLogin();
    auth.clearToken();
    history.push('/signin');
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={classes.topRight}>
        {authenticated && (
          <button
            className={classes.signOutButton}
            onClick={handleSignOut}
            type="button"
          >
            Logout
          </button>
        )}
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

export default compose(
  withConnect,
  memo,
  withRouter,
  withStyle,
)(Topbar);
