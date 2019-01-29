import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signUp } from '../modules/session/sessionOperations';
import { getIsAuthenticated } from '../modules/session/sessionSelectors';

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    componentDidUpdate() {
      const { isAuthenticated, location, history } = this.props;

      const { from } = location.state || { from: { pathname: '/' } };

      if (isAuthenticated) {
        history.push({
          pathname: from.pathname,
          state: { from: location },
        });
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const mstp = state => ({
    isAuthenticated: getIsAuthenticated(state),
  });

  const mdtp = {
    signIn,
    signUp,
  };
  return connect(
    mstp,
    mdtp,
  )(WithAuth);
};

export default withAuth;
