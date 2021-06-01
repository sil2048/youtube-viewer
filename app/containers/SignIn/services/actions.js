import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, RESET_LOGIN } from './constants';

export const login = payload => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,
});

export const resetLogin = () => ({
  type: RESET_LOGIN,
});
