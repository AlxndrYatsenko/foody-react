import React from 'react';
import s from '../Cart.module.css';

export default ({ onDelete, id }) => (
  <button className={s.deleteBtn} type="button" onClick={() => onDelete(id)}>
    <div className={s.btnWrap}>
      <img
        className={s.basket}
        src="https://image.flaticon.com/icons/svg/1406/1406506.svg"
        alt="basket"
      />
    </div>
  </button>
);
