import React from 'react';

import s from './SignInForm.module.css';

const SignInForm = ({ onChange, email, password, onSubmit }) => (
  <form className={s.form} onSubmit={onSubmit}>
    <label className={s.label}>
      Эл. почта
      <input
        className={s.input}
        name="email"
        type="email"
        value={email}
        required
        autoComplete="email"
        onChange={onChange}
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
        onChange={onChange}
      />
    </label>
    <button className={s.submitBtn} type="submit">
      Log in
    </button>
  </form>
);

export default SignInForm;
