import React from 'react';

import passProps from '../../hoc/withAuth';

import s from './Account.module.css';

const Account = ({ onSubmit, img, name, phone, email }) => (
  <div className={s.wrap}>
    <div className={s.info}>
      <img className={s.avatar} src={img} alt={name} />
      <span className={s.name}>{name}</span>
      <span className={s.phone}>{phone}</span>
      <span className={s.email}>{email}</span>
    </div>
    <form className={s.update} onSubmit={onSubmit}>
      <input className={s.urlInput} placeholder="URL фото " />
      <input className={s.nameInput} placeholder="Введите имя" />
      <input className={s.phoneInput} placeholder="Введите номер телефона" />
      <input className={s.emailInput} placeholder="Введите email" />
      <button type="submit">update</button>
    </form>
  </div>
);

export default passProps({
  name: 'Elon Mask',
  phone: '555-555-55',
  email: 'elon@nomail.net',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/220px-Elon_Musk_2015.jpg',
})(Account);
