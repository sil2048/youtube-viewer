import { createSelector } from 'reselect';
import initialState from './initialState';
import { key } from './constants';

const postsSelector = state => state[key] || initialState;

const makeSelectPosts = () =>
  createSelector(
    postsSelector,
    postsState => postsState.posts,
  );

const makeSelectSelectedPost = () =>
  createSelector(
    postsSelector,
    postsState => postsState.selectedPost,
  );

export { makeSelectPosts, makeSelectSelectedPost };
