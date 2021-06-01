import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostsList(props) {
  const { posts, match, classes } = props;
  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div>
            <Link to={`${match.url}/${post.id}`}>
              <button type="button" className={classes.greenButtonNormal}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

// Define PropTypes
PostsList.propTypes = {
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default memo(PostsList);
