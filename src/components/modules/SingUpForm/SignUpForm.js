import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as operations from '../session/sessionOperations';

import s from '../SingInForm/SignInForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  handleCange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, password, phone } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Имя
          <input
            className={s.input}
            name="name"
            type="text"
            onChange={this.handleCange}
            value={name}
            required
          />
        </label>
        <label className={s.label}>
          Эл. почта
          <input
            className={s.input}
            name="email"
            type="email"
            autoComplete="email"
            onChange={this.handleCange}
            value={email}
            required
          />
        </label>
        <label className={s.label}>
          Телефон
          <input
            className={s.input}
            name="phone"
            type="tel"
            autoComplete="username"
            onChange={this.handleCange}
            value={phone}
            required
          />
        </label>
        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            name="password"
            type="password"
            autoComplete="new-password"
            onChange={this.handleCange}
            value={password}
            required
          />
        </label>
        <button className={s.submitBtn} type="submit">
          Sign up
        </button>
      </form>
    );
  }
}

const mdtp = {
  onSubmit: operations.signUp,
};

export default connect(
  null,
  mdtp,
)(SignUpForm);
