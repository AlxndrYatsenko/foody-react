import React, { Component } from 'react';

import SignUpForm from './SignUpForm';

import withAuth from '../../hoc/withAuth';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

class SignUpContainer extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { signUp } = this.props;
    signUp({ ...this.state });
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
      <SignUpForm
        {...this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
export default withAuth(SignUpContainer);
