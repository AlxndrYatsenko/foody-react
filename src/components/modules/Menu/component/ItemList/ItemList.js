import React from 'react';
import { Link } from 'react-router-dom';

import s from '../Menu.module.css';

const ItemList = ({ menuItems, onDeleteItem, match, location }) => (
  <ul className={s.list}>
    {menuItems.map(({ id, name, image, price }) => (
      <li className={s.item} key={id}>
        <Link
          to={{
            pathname: `${match.url}/item/${id}`,
            state: { from: location },
          }}
        >
          <div className={s.itemContainer}>
            <img className={s.img} src={image} alt={name} />
            <p className={s.name}>{name}</p>
            <p className={s.price}>Цена: {price} денег</p>
          </div>
        </Link>
        <button
          className={s.deleteBtn}
          type="button"
          onClick={() => onDeleteItem(id)}
        >
          удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ItemList;
