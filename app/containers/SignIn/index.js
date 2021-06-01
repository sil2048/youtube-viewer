import React, { useState, memo, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// Externals
import PropTypes from 'prop-types';
import { compose } from 'redux';
import validate from 'validate.js';
import { debounce } from 'lodash';
import { createStructuredSelector } from 'reselect';
import injectSheet from 'react-jss';

import PageLoading from 'containers/PageLoading';

import { Avatar } from 'assets/icons';

import { connect } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { RESTART_ON_REMOUNT } from 'utils/constants';

import { login, makeSelectLoginStatus, saga, reducer, key } from './services';
// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

function SignIn(props) {
  const { loginStatus, history, location, onLogin, classes } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: RESTART_ON_REMOUNT });

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [errors, setError] = useState({
    email: null,
    password: null,
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (loginStatus && loginStatus.data) {
      const { from } = location.state || { from: { pathname: '/' } };
      history.push(from);
    }
  }, [loginStatus]);

  const validateForm = debounce(() => {
    const newErrors = validate(values, schema);
    setError(newErrors || {});
    setIsValid(!newErrors);
  }, 300);

  function handleFieldChange(e) {
    const { name, value } = e.target;
    setSubmitError(null);
    setTouched({
      ...touched,
      [name]: true,
    });
    setValues({
      ...values,
      [name]: value,
    });
    validateForm();
  }

  function handleSignIn(e) {
    e.preventDefault();
    onLogin({ values });
  }

  const showEmailError = touched.email && errors.email;
  const showPasswordError = touched.password && errors.password;

  if (loginStatus && loginStatus.waiting) {
    return <PageLoading />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <div className={classes.content}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSignIn}>
                <div className={classes.avatar}>
                  <Avatar />
                </div>
                <h2 className={classes.title}>Sign in</h2>
                <div className={classes.fields}>
                  <input
                    className={classes.textField}
                    placeholder="Email address"
                    name="email"
                    onChange={handleFieldChange}
                    type="text"
                    value={values.email}
                  />
                  {showEmailError && (
                    <p className={classes.fieldError}>{errors.email[0]}</p>
                  )}
                  <input
                    className={classes.textField}
                    placeholder="Password"
                    name="password"
                    onChange={handleFieldChange}
                    type="password"
                    value={values.password}
                  />
                  {showPasswordError && (
                    <p className={classes.fieldError}>{errors.password[0]}</p>
                  )}
                </div>
                {submitError && (
                  <p className={classes.submitError}>{submitError}</p>
                )}
                {isLoading ? (
                  <div className={classes.progress}>Waiting...</div>
                ) : (
                  <button
                    className={classes.signInButton}
                    disabled={!isValid}
                    type="submit"
                  >
                    Sign in
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
  loginStatus: PropTypes.object,
  classes: PropTypes.object,
};

SignIn.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  loginStatus: makeSelectLoginStatus(),
});

const mapDispatchToProps = {
  onLogin: login,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withStyle = injectSheet(styles);

export default compose(
  withConnect,
  withRouter,
  memo,
  withStyle,
)(SignIn);
