import { toast } from 'react-toastify';
import produce from 'immer';
import initialState from './initialState';
import * as constants from './constants';

/* eslint-disable default-case, no-param-reassign */
export default function(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case constants.GET_POSTS_REQUEST:
        draft.posts = {
          waiting: true,
          error: false,
          data: false,
        };
        break;
      case constants.GET_POSTS_SUCCESS:
        draft.posts = {
          waiting: false,
          error: false,
          data: action.posts,
        };
        break;
      case constants.GET_POSTS_ERROR:
        draft.posts = {
          waiting: false,
          error: action.error,
          data: false,
        };
        break;
      case constants.SELECT_POST_REQUEST:
        draft.selectedPost = {
          waiting: true,
          error: false,
          data: false,
        };
        break;
      case constants.SELECT_POST_SUCCESS:
        draft.selectedPost = {
          waiting: false,
          error: false,
          data: action.selectedPost,
        };
        break;
      case constants.SELECT_POST_ERROR:
        toast.error(`ERROR: ${action.error.status}`);
        draft.selectedPost = {
          waiting: false,
          error: action.error.status,
          data: false,
        };
    }
  });
}
