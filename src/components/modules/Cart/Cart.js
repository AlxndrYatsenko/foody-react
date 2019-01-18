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
                <button
                  className={s.deleteBtn}
                  type="button"
                  onClick={() => onDelete(id)}
                >
                  <div className={s.btnWrap}>
                    <img
                      className={s.cross}
                      src="https://image.flaticon.com/icons/svg/179/179429.svg"
                      alt="cross"
                    />
                  </div>
                </button>
              </td>
              <td colSpan="2">
                <div className={s.dishWrap}>
                  <img
                    className={s.image}
                    src={image}
                    alt={name}
                    width="60"
                    height="60"
                  />
                  <span>{name}</span>
                </div>
              </td>
              <td>
                <div className={s.amountWrap}>
                  <p className={s.amountValue}> {amount}</p>
                  <div className={s.btnWrap}>
                    <button
                      className={s.incrementBtn}
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
                      className={s.decrementBtn}
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
          {/* <caption></caption> */}
          <tr className={s.table}>
            <td className={s.total} colSpan="4" />
            <td className={s.total}>ИТОГО: {totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <h3>В корзине нет товаров!</h3>
  );
export default Cart;
