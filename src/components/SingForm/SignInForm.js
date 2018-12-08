import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  hundleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ ...INITIAL_STATE });
  };

  handleCange = e => {
    e.preventDefault();
    const { value } = e.target;
    const { name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { password, email } = this.state;

    return (
      <form onSubmit={this.hundleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          autoComplete="email"
          onChange={this.handleCange}
        />
        <br />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          autoComplete="new-password"
          onChange={this.handleCange}
        />
        <br />
        <button type="submit">Log in</button>
        <br />
      </form>
    );
  }
}
