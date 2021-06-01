import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { RESTART_ON_REMOUNT } from 'utils/constants';

import { ComponentLoading, ComponentError } from 'components';
import WithMetaTags from 'layouts/WithMetaTags';
import {
  selectPost,
  makeSelectSelectedPost,
  saga,
  reducer,
  key,
} from './services';

const Detail = props => {
  const { selectedPost, match, onSelectPost } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: RESTART_ON_REMOUNT });

  const [fetched] = useState(selectedPost);

  const getPost = () => {
    const { id } = match.params;
    onSelectPost({ id });
  };

  useEffect(() => {
    getPost();
  }, [fetched]);

  if (selectedPost.waiting) {
    return <ComponentLoading />;
  }

  if (selectedPost.data) {
    const detail = selectedPost.data;
    return (
      <WithMetaTags title={detail.title} description={detail.body}>
        <div className="posts-container">
          <div>
            <h1>{detail.title}</h1>
          </div>
          <div>{detail.body}</div>
        </div>
      </WithMetaTags>
    );
  }

  return <ComponentError>{selectedPost.error}!</ComponentError>;
};

// Define PropTypes
Detail.propTypes = {
  onSelectPost: PropTypes.func.isRequired,
  selectedPost: PropTypes.object.isRequired,
  match: PropTypes.object,
};

Detail.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  selectedPost: makeSelectSelectedPost(),
});

const mapDispatchToProps = {
  onSelectPost: selectPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
