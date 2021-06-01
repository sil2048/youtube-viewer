import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Minimal as MinimalLayout } from 'layouts';
import WithMetaTags from 'layouts/WithMetaTags';
import { SadFace } from 'assets/icons';

// Component styles
const styles = {
  root: {
    padding: 20,
  },
  content: {
    marginTop: '150px',
    textAlign: 'center',
  },
  sadFace: {
    padding: 20,
  },
  image: {
    display: 'inline-block',
    marginTop: '50px',
    maxWidth: '100%',
    width: '554px',
  },
};

function NotFound(props) {
  const { classes } = props;

  return (
    <WithMetaTags title="Page not found!">
      <MinimalLayout>
        <div className={classes.root}>
          <div className={classes.content}>
            <div className={classes.sadFace}>
              <SadFace />
            </div>
            <h1>404: The page you are looking for isn’t here</h1>
            <p>
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </p>
          </div>
        </div>
      </MinimalLayout>
    </WithMetaTags>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(NotFound);
