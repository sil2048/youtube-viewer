import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import WithMetaTags from 'layouts/WithMetaTags';
import messages from './messages';
import styles from './styles';

const withStyles = injectSheet(styles);

function HomePage(props) {
  const { classes } = props;
  return (
    <WithMetaTags title="Home" description="React project template">
      <div className={classes.root}>
        <FormattedMessage {...messages.home} />
      </div>
    </WithMetaTags>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(HomePage);
