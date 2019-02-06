import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../configs/routes';
import { getIsAuthenticated } from '../modules/session/sessionSelectors';

const PrivateRoute = ({
  component: Component,
  redirectTo = routes.SIGNIN,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mstp = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mstp)(PrivateRoute);
