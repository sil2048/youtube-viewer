import { put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { auth } from 'utils';

import apiServices from './api';
import { LOGIN } from './constants';
import { loginSuccess, loginError } from './actions';

function* loginSaga(action) {
  try {
    const { values } = action.payload;
    const response = yield call(apiServices.login, values);
    const { message, token } = response;
    toast.success(message);

    auth.setToken(token, true);
    auth.setUserInfo(token, true);

    yield put(loginSuccess(message));
  } catch (error) {
    const { response } = error;
    toast.error(response.message);
    yield put(loginError(error));
  }
}

export default function* root() {
  yield takeLatest(LOGIN, loginSaga);
}
