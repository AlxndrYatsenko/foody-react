import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserProfile from '../modules/user/UserMenu/UserProfileContainer';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Auth from '../modules/Auth/Auth';
import CartLinkContainer from '../modules/CartLink/CartLinkContainer';

import navItems from '../../configs/main-nav';
import s from './AppHeader.module.css';
import routes from '../../configs/routes';
import {
  getAuthentication,
  getUser,
} from '../modules/session/sessionSelectors';

const AppHeader = ({ isAuthenticated, user }) => (
  <header className={s.header}>
    <Link to={routes.MAIN}>
      <Logo width={100} />
    </Link>
    <Navigation navItems={navItems} />
    {isAuthenticated ? <UserProfile user={user} /> : <Auth />}
    <CartLinkContainer />
  </header>
);

const mstp = state => ({
  user: getUser(state),
  isAuthenticated: getAuthentication(state),
});

export default connect(mstp)(AppHeader);
