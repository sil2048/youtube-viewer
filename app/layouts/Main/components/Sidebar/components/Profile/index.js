import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Avatar } from 'assets/icons';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: 5,
  },
};

const Profile = props => {
  const { className, classes, ...rest } = props;

  const user = {
    name: 'Sil',
    bio: 'Director',
  };

  return (
    <div {...rest} className={classes.root}>
      <Avatar />
      <h4 className={classes.name}>{user.name}</h4>
      <p variant="body2">{user.bio}</p>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
};

export default injectSheet(styles)(Profile);
