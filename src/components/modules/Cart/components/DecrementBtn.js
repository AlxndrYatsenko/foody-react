import React from 'react';
import s from '../Cart.module.css';

const isActiveBtn = amount => (amount === 1 ? s.disabled : s.decrementBtn);

export default ({ decrementAmount, id, amount }) => (
  <button
    className={isActiveBtn(amount)}
    type="button"
    disabled={amount === 1}
    onClick={() => decrementAmount(id)}
  >
    <img
      className={s.decrem}
      src="https://image.flaticon.com/icons/svg/109/109504.svg"
      alt="decrement"
    />
  </button>
);
