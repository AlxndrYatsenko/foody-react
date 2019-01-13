import React from 'react';

import s from '../OrderHistory.module.css';

const CurrentOrder = ({
  currentOrder: { date, price, address, rating },
  closeModalShowOrder,
}) => (
  <div className={s.list}>
    <p className={date}>
      Дата заказа: <b>{date}</b>
    </p>
    <p className={price}>
      Цена: <b>{price}</b>
    </p>
    <p className={address}>
      Адресс доставки: <b>{address}</b>
    </p>
    <p className={rating}>
      Рейтинг: <b>{rating}</b>
    </p>
    <button className="close-btn" type="button" onClick={closeModalShowOrder}>
      Закрыть
    </button>
  </div>
);

export default CurrentOrder;
