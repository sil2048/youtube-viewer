import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectSheet from 'react-jss';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { RESTART_ON_REMOUNT } from 'utils/constants';

import WithMetaTags from 'layouts/WithMetaTags';
import PageLoading from 'containers/PageLoading';
import { ComponentError } from 'components';

import { saga, reducer, getPosts, makeSelectPosts, key } from './services';
import PostsList from './PostsList';
import styles from './styles';

const withStyles = injectSheet(styles);

function Posts(props) {
  const { posts, onGetPosts, classes } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: RESTART_ON_REMOUNT });

  const [fetched] = useState(posts);

  useEffect(() => {
    onGetPosts();
  }, [fetched]);

  if (posts.waiting) {
    return <PageLoading />;
  }

  if (posts.data) {
    return (
      <WithMetaTags title="posts" description="posts description">
        <div className={classes.root}>
          <PostsList classes={classes} {...props} posts={posts.data} />
        </div>
      </WithMetaTags>
    );
  }

  return (
    <WithMetaTags title="posts" content="No data available!">
      <ComponentError>
        <span style={{ fontSize: 16 }}>No data available!</span>
      </ComponentError>
    </WithMetaTags>
  );
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  onGetPosts: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object,
};

Posts.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

const mapDispatchToProps = {
  onGetPosts: getPosts,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withStyles,
)(Posts);
