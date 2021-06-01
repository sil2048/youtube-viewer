import reducer from './reducer';
import saga from './saga';
import { getPosts, selectPost } from './actions';
import { makeSelectPosts, makeSelectSelectedPost } from './selectors';
import { key } from './constants';

export {
  saga,
  reducer,
  getPosts,
  makeSelectPosts,
  selectPost,
  makeSelectSelectedPost,
  key,
};
