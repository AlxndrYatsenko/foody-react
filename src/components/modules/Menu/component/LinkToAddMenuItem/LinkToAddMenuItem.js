import React from 'react';
import { Link } from 'react-router-dom';

import s from '../Menu.module.css';

const ItemList = ({ match, location }) => (
  <Link
    className={s.addLink}
    to={{
      pathname: `${match.url}/add`,
      state: { from: location },
    }}
  >
    Добавить элемент меню
  </Link>
);

export default ItemList;
