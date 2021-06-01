import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  footer: {
    padding: 20,
    borderTop: '1px solid #ccc',
  },
};

const Footer = props => {
  const { className, classes, ...rest } = props;

  return (
    <div {...rest} className={classes.footer}>
      <p>
        <a
          href="https://www.4codev.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sil
        </a>
        . 2019
      </p>
      <p>Created with love for the environment.</p>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
};

export default injectSheet(styles)(Footer);
