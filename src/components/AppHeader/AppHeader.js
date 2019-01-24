import React from 'react';
import { Link } from 'react-router-dom';

import UserMenuComponent from '../modules/user/UserMenu/UserMenuComponent';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import CartLinkContainer from '../modules/CartLink/CartLinkContainer';

import user from '../modules/user/UserMenu/userData';
import navItems from '../../configs/main-nav';
import s from './AppHeader.module.css';
import routes from '../../configs/routes';

const AppHeader = () => (
  <header className={s.header}>
    <Link to={routes.MAIN}>
      <Logo width={100} />
    </Link>
    <Navigation navItems={navItems} />
    <UserMenuComponent user={user} />
    <CartLinkContainer />
  </header>
);

export default AppHeader;
