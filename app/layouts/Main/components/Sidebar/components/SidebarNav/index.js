/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import commons from 'assets/styles/jss/commons';

const styles = {
  mainNav: {
    borderTop: `1px solid ${commons.colors.gray}`,
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: commons.colors.grayBlue,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: 'normal',
  },
  icon: {
    color: commons.colors.grayBlue,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
  },
  active: {
    color: commons.colors.blue,
    fontWeight: 'normal',
    '& $icon': {
      color: commons.colors.blue,
    },
  },
};

const SidebarNav = props => {
  const { pages, className, classes, ...rest } = props;

  return (
    <ul {...rest} className={classes.mainNav}>
      {pages.map(page => (
        <li className={classes.item} key={page.title}>
          <RouterLink
            activeClassName={classes.active}
            className={classes.button}
            to={page.href}
            exact={page.exact}
          >
            {page.title}
          </RouterLink>
        </li>
      ))}
    </ul>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object,
};

export default injectSheet(styles)(SidebarNav);
