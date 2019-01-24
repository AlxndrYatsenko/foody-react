import React from 'react';
import { Link } from 'react-router-dom';

import s from './Cart.module.css';

const isActiveBtn = amount => (amount === 1 ? s.disabled : s.decrementBtn);

const Cart = ({
  dishes = [],
  totalPrice,
  onDelete,
  incrementAmount,
  decrementAmount,
  location,
}) =>
  dishes.length > 0 ? (
    <div>
      <table>
        <tbody>
          <tr className={s.table}>
            <th className={s.delete}>Удалить</th>
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
                <Link
                  className={s.dishWrap}
                  to={{
                    pathname: `/menu/${id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className={s.image}
                    src={image}
                    alt={name}
                    width="60"
                    height="60"
                  />
                  <p>{name}</p>
                </Link>
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
                      className={isActiveBtn(amount)}
                      type="button"
                      disabled={amount === 1}
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
          <tr className={s.table}>
            <td className={s.total} colSpan="4" />
            <td className={s.total}>ИТОГО: {totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <h2>А Вы положили что-нибудь?</h2>
  );
export default Cart;
