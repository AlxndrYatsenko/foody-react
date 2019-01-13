import React from 'react';

const AddOrderView = ({
  address,
  price,
  rating,
  onClose,
  onSubmit,
  onChange,
}) => (
  <form onSubmit={onSubmit}>
    <label>
      Адрес доставки:
      <input
        name="address"
        type="text"
        onChange={onChange}
        value={address}
        required
      />
    </label>
    <label>
      Цена:
      <input
        name="price"
        type="text"
        onChange={onChange}
        value={price}
        required
      />
    </label>
    <label>
      Рейтинг:
      <input
        name="rating"
        type="text"
        onChange={onChange}
        value={rating}
        required
      />
    </label>
    <button type="submit">Отправить</button>
    <button type="button" onClick={onClose}>
      Закрыть
    </button>
  </form>
);

export default AddOrderView;
