import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = ({ navItems }) => (
  <nav>
    <ul className={s.navList}>
      {navItems.map(rout => (
        <li key={rout.name}>
          <NavLink
            className={s.navListLink}
            activeClassName={s.activeLink}
            to={rout.to}
          >
            {rout.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navigation;
