import React, { Component } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default class SingForm extends Component {
  state = {
    on: false,
  };

  handleCheckSingin = () => {
    this.setState({ on: true });
  };

  handleCheckSingup = () => {
    this.setState({ on: false });
  };

  render() {
    const { on } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleCheckSingin}>
          Sign in
        </button>
        <button type="button" onClick={this.handleCheckSingup}>
          Sign up
        </button>
        {on ? <SignInForm /> : <SignUpForm />}
      </div>
    );
  }
}
