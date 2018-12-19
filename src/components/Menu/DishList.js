import React from 'react';
import { Link } from 'react-router-dom';
import s from './DishList.module.css';

const DishList = ({ dishList, match, location }) => (
  <ul className={s.list}>
    {dishList.map(({ id, name, image, price }) => (
      <li className={s.item} key={id}>
        <Link
          to={{
            pathname: `${match.url}/${id}`,
            state: { from: location },
          }}
        >
          <img className={s.img} src={image} alt={name} />
          <p className={s.name}>{name}</p>
          <p className={s.price}>Цена: {price} денег</p>
        </Link>
      </li>
    ))}
    <hr />
  </ul>
);

export default DishList;
