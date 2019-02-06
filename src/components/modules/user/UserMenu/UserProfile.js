import React from 'react';

import Dropdown from './Dropdown/Dropdown';
import Avatar from '../Avatar/Avatar';

import s from './UserProfile.module.css';

const getClassName = isOpen => [s.name, isOpen ? s.up : s.down].join(' ');

const User = ({ user, isDropdownOpen, onClose }) => (
  <>
    <Avatar user={user} width="50px" />
    <p className={getClassName(isDropdownOpen)}>{user.name}</p>

    {isDropdownOpen && <Dropdown onClose={onClose} />}
  </>
);
export default User;
