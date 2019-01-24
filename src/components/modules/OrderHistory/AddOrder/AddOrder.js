import React from 'react';

import s from './AddOrder.module.css';

const AddOrderView = ({
  address,
  price,
  rating,
  onClose,
  onSubmit,
  onChange,
  error,
}) => (
  <>
    {error && <p>{error.text}</p>}
    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.address}>
        Адрес доставки:
        <input
          name="address"
          type="text"
          onChange={onChange}
          value={address}
          required
        />
      </label>
      <label className={s.price}>
        Цена:
        <input
          name="price"
          type="text"
          onChange={onChange}
          value={price}
          required
        />
      </label>
      <label className={s.rating}>
        Рейтинг:
        <input
          name="rating"
          type="text"
          onChange={onChange}
          value={rating}
          required
        />
      </label>
      <button className={s.submitBtn} type="submit">
        Добавить
      </button>
      <button className={s.cancelBtn} type="button" onClick={onClose}>
        Закрыть
      </button>
    </form>
  </>
);

export default AddOrderView;
