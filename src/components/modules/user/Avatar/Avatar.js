import React from 'react';
import s from './Avatar.module.css';

const Avatar = ({ width }) => (
  <img
    className={s.avatar}
    src="https://image.flaticon.com/icons/svg/149/149995.svg"
    alt="User avatar"
    width={width}
  />
);

export default Avatar;
