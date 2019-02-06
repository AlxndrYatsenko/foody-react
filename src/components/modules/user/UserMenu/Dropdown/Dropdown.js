import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../../configs/user-nav';

import s from './Dropdown.module.css';

const Dropdown = ({ onClose }) => (
  <div className={s.container}>
    <ul className={s.list}>
      {userNavItems.map(item => (
        <li className={s.item} key={item.name}>
          <Link to={item.path}>
            <button className={s.linkBtn} type="button" onClick={onClose}>
              {item.name}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Dropdown;
