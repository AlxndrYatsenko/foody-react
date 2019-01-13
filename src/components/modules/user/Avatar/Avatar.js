import React from 'react';
import s from './Avatar.module.css';

const Avatar = ({ user, width }) => (
  <img className={s.avatar} src={user.avatar} alt={user.name} width={width} />
);

export default Avatar;
