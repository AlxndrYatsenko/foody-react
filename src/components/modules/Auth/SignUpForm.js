import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

export default class SignUpForm extends Component {
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
    const { name, email, password, phone } = this.state;

    return (
      <form onSubmit={this.hundleSubmit}>
        <input
          name="name"
          placeholder="Name"
          type="text"
          onChange={this.handleCange}
          value={name}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          autoComplete="email"
          onChange={this.handleCange}
          value={email}
        />
        <br />
        <input
          name="phone"
          placeholder="Phone"
          type="tel"
          autoComplete="username"
          onChange={this.handleCange}
          value={phone}
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          onChange={this.handleCange}
          value={password}
        />
        <br />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}
