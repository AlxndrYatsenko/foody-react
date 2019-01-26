import React from 'react';

import Dropdown from './Dropdown/Dropdown';
import Avatar from '../Avatar/Avatar';

import s from './UserProfile.module.css';

const User = ({ user, isDropdownOpen, onClose }) => (
  // const className = ;

  <>
    <Avatar user={user} width="50px" />
    {isDropdownOpen ? (
      <p className={[s.name, s.up].join(' ')}>{user.name}</p>
    ) : (
      <p className={[s.name, s.down].join(' ')}>{user.name}</p>
    )}

    {isDropdownOpen && <Dropdown onClose={onClose} />}
  </>
);
export default User;
