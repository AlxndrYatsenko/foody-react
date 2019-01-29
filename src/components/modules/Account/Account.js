import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../session/sessionSelectors';
import avatar from '../user/UserMenu/addition/userAvatar';
import s from './Account.module.css';

const Account = ({ onSubmit, user: { name, email } }) => (
  <div className={s.wrap}>
    <div className={s.info}>
      <img className={s.avatar} src={avatar} alt={name} />
      <span className={s.name}>{name}</span>
      <span className={s.email}>{email}</span>
    </div>
    <form className={s.update} onSubmit={onSubmit}>
      <input className={s.urlInput} placeholder="URL фото " />
      <input className={s.nameInput} placeholder="Введите имя" />
      <input className={s.emailInput} placeholder="Введите email" />
      <button type="submit">update</button>
    </form>
  </div>
);

const mstp = state => ({
  user: getUser(state),
});

export default connect(mstp)(Account);
