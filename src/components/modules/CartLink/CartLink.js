import React from 'react';
import { Link } from 'react-router-dom';
import s from './CartLink.module.css';
import routes from '../../../configs/routes';

const CartLink = ({ amount }) => (
  <div className={s.container}>
    <Link to={routes.CART.root}>
      <img
        className={s.image}
        src="https://image.flaticon.com/icons/svg/679/679701.svg"
        width="80"
        alt="cart"
      />
      {amount > 0 && <span className={s.amount}>{amount}</span>}
    </Link>
  </div>
);

export default CartLink;
