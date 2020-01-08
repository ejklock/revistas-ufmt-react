import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import HomeLayout from '../pages/_layouts/home';

export default function RouteWraper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  const { isHome = false } = rest;
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = !isHome ? (signed ? DefaultLayout : AuthLayout) : HomeLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWraper.propTypes = {
  isPrivate: PropTypes.bool,
  isHome: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWraper.defaultProps = {
  isPrivate: false,
  isHome: false,
};
