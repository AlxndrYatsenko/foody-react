import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../session/sessionOperations';

import s from './SignInForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  hundleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
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
      <form className={s.form} onSubmit={this.hundleSubmit}>
        <label className={s.label}>
          Эл. почта
          <input
            className={s.input}
            name="email"
            type="email"
            value={email}
            required
            autoComplete="email"
            onChange={this.handleCange}
          />
        </label>
        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            name="password"
            type="password"
            value={password}
            required
            autoComplete="new-password"
            onChange={this.handleCange}
          />
        </label>
        <button className={s.submitBtn} type="submit">
          Log in
        </button>
      </form>
    );
  }
}

const mdtp = {
  onSubmit: signIn,
};

export default connect(
  null,
  mdtp,
)(SignInForm);
