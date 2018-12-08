import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import logo from '../services/logoData';
import navList from '../services/headerNavList';
import userData from '../services/userData';

const Header = () => (
  <header>
    <Logo logo={logo} />
    <Navigation navList={navList} />
    <UserMenu user={userData} />
  </header>
);

export default Header;
