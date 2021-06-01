import * as constants from './constants';

export const selectPost = payload => ({
  type: constants.SELECT_POST_REQUEST,
  payload,
});

export const selectPostSuccess = selectedPost => ({
  type: constants.SELECT_POST_SUCCESS,
  selectedPost,
});

export const selectPostError = error => ({
  type: constants.SELECT_POST_ERROR,
  error,
});

export const getPosts = payload => ({
  type: constants.GET_POSTS_REQUEST,
  payload,
});

export const getPostsSuccess = posts => ({
  type: constants.GET_POSTS_SUCCESS,
  posts,
});

export const getPostsError = error => ({
  type: constants.GET_POSTS_ERROR,
  error,
});
