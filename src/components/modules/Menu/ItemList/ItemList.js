import React from 'react';
import { Link } from 'react-router-dom';

import s from '../Menu.module.css';

const ItemList = ({ menuItems, match, location }) => (
  <ul className={s.list}>
    {menuItems.map(({ id, name, image, price }) => (
      <li className={s.item} key={id}>
        <Link
          to={{
            pathname: `${match.url}/${id}`,
            state: { from: location },
          }}
        >
          <div className={s.imgComtainer}>
            <img className={s.img} src={image} alt={name} />
          </div>
          <p className={s.name}>{name}</p>
          <p className={s.price}>Цена: {price} денег</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default ItemList;
