import React from 'react';

import s from './Cart.module.css';

const Cart = ({
  dishes = [],
  totalPrice,
  onDelete,
  incrementAmount,
  decrementAmount,
}) =>
  dishes.length > 0 ? (
    <div>
      <table>
        <tbody>
          <tr className={s.table}>
            <th className={s.delete}>Удалить</th>
            {/* <th>Фото</th> */}
            <th className={s.dish} colSpan="2">
              Блюдо
            </th>
            <th className={s.amount}>Колличество</th>
            <th className={s.price}>Стоимость</th>
          </tr>
          {dishes.map(({ id, name, image, price, amount }) => (
            <tr className={s.table} key={id}>
              <td>
                <button type="button" onClick={() => onDelete(id)} />
              </td>
              <td>
                <img
                  className={s.image}
                  src={image}
                  alt={name}
                  width="60"
                  height="60"
                />
              </td>
              <td>{name}</td>
              <td>
                <div className={s.amountWrap}>
                  {amount}
                  <div className={s.btnWrap}>
                    <button
                      className={s.addBtn}
                      type="button"
                      onClick={() => incrementAmount(id)}
                    >
                      <img
                        className={s.arrow}
                        src="https://image.flaticon.com/icons/svg/25/25678.svg"
                        alt="up arrow"
                      />
                    </button>
                    <button
                      className={s.delBtn}
                      type="button"
                      onClick={() => decrementAmount(id)}
                    >
                      <img
                        className={s.arrow}
                        src="https://image.flaticon.com/icons/svg/25/25224.svg"
                        alt="up arrow"
                      />
                    </button>
                  </div>
                </div>
              </td>
              <td>{price * amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>ИТОГО: {totalPrice}</p>
    </div>
  ) : (
    <h3>В корзине нет товаров!</h3>
  );
export default Cart;
