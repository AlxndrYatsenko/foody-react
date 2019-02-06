import React from 'react';
import s from '../Cart.module.css';

export default ({ incrementAmount, id }) => (
  <button
    className={s.incrementBtn}
    type="button"
    onClick={() => incrementAmount(id)}
  >
    <img
      className={s.increm}
      src="https://image.flaticon.com/icons/svg/109/109526.svg"
      alt="increment"
    />
  </button>
);
