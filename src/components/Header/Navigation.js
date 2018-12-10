import React from 'react';
import { Link } from 'react-router-dom';
// import HomePage from './navList/Home';
// import AboutPage from './navList/About';
// import NotFound from './navList/NotFound';
// import Menu from '../Menu/Menu';
import style from './Header.module.css';
// import dishList from '../../services/menu.json';

const Navigation = () => (
  <nav>
    <ul className={style.navList}>
      <li key="Main">
        <Link className={style.navListLink} to="/">
          ГЛАВНАЯ
        </Link>
      </li>
      <li key="Menu">
        <Link className={style.navListLink} to="/menu">
          МЕНЮ
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
