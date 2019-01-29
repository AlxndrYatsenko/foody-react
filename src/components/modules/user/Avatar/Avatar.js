import React from 'react';

import avatar from '../UserMenu/addition/userAvatar';
import s from './Avatar.module.css';

const Avatar = ({ width }) => (
  <img className={s.avatar} src={avatar} alt="User avatar" width={width} />
);

export default Avatar;
