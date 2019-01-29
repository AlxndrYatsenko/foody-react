import React, { Component } from 'react';

import SignInForm from './SignInForm';

import withAuth from '../../hoc/withAuth';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInContainer extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { signIn } = this.props;
    signIn({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <SignInForm
        {...this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default withAuth(SignInContainer);
