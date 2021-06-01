import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';

import { SITE_URL } from 'configs';
import { defaultSep, defaultTitle } from 'utils/metaTags';
import { getMetaTags } from 'utils';

function WithMetaTags(props) {
  const { children, ...rest } = props;
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          itemscope: undefined,
          itemtype: `http://schema.org/${rest.schema || 'WebPage'}`,
        }}
        title={
          rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
        }
        link={[
          {
            rel: 'canonical',
            href: SITE_URL + props.location.pathname,
          },
        ]}
        meta={getMetaTags(rest, props.location.pathname)}
      />
      {children}
    </>
  );
}

WithMetaTags.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  location: PropTypes.object,
};

export default withRouter(WithMetaTags);
