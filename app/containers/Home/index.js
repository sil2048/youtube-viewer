import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import injectSheet from 'react-jss';

import WithMetaTags from 'layouts/WithMetaTags';
import messages from './messages';
import styles from './styles';

const withStyles = injectSheet(styles);

function HomePage(props) {
  const { classes } = props;
  const [url, setUrl] = useState('https://www.youtube.com');
  let inter = null;

  const getId = fullUrl => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = fullUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const removeAd = () => {
    inter = setTimeout(() => {
      const iframe = document.getElementById('yTube');
      console.log(iframe);
      const el = iframe.contentWindow.document.getElementsByClassName(
        'ytp-ad-module',
      )[0];
      if (el) {
        el.style.display = 'none';
        clearTimeout(inter);
      }
    }, 5000);
  };

  const setNewUrl = e => {
    const id = getId(e.currentTarget.value);
    setUrl(`https://www.youtube.com/embed/${id}`);
    removeAd();
  };

  return (
    <WithMetaTags
      title="Sil's Youtube Viewer"
      description="Sil's Youtube Viewer"
    >
      <input type="input" onChange={setNewUrl} />
      <div className={classes.root}>
        <FormattedMessage {...messages.home} />
        <Iframe
          url={url}
          width="70%"
          height="100%"
          position="absolute"
          id="yTube"
          frameborder="0"
          allowFullScreen
        />
      </div>
    </WithMetaTags>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(HomePage);
