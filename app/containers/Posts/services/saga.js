import { put, call, all, takeLatest } from 'redux-saga/effects';
import services from './api';
import * as constants from './constants';
import {
  getPostsError,
  getPostsSuccess,
  selectPostSuccess,
  selectPostError,
} from './actions';

function* postsSaga() {
  try {
    const respone = yield call(services.getPosts);
    yield put(getPostsSuccess(respone.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('saga', error);
    yield put(getPostsError(error.response));
  }
}

function* selectPostSaga(action) {
  try {
    const response = yield call(services.getSelectPost, action.payload);
    yield put(selectPostSuccess(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('saga', error);
    yield put(selectPostError(error.response));
  }
}

export default function* root() {
  yield all([
    takeLatest(constants.GET_POSTS_REQUEST, postsSaga),
    takeLatest(constants.SELECT_POST_REQUEST, selectPostSaga),
  ]);
}
