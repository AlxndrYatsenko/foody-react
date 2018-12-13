import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Navigation = () => (
  <nav>
    <ul className={s.navList}>
      <li key="Main">
        <NavLink
          className={s.navList}
          exact
          activeClassName={s.navListLink}
          to="/"
        >
          ГЛАВНАЯ
        </NavLink>
      </li>
      <li key="Menu">
        <NavLink
          className={s.navList}
          exact
          activeClassName={s.navListLink}
          to="/menu"
        >
          МЕНЮ
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navigation;
