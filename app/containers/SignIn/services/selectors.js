import { createSelector } from 'reselect';
import initialState from './reducer';
import { key } from './constants';

const loginSelector = state => state[key] || initialState;

const makeSelectLoginStatus = () =>
  createSelector(
    loginSelector,
    signInState => signInState.loginStatus,
  );

export { makeSelectLoginStatus };
