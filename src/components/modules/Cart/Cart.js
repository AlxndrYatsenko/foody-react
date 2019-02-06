import React from 'react';
import { Link } from 'react-router-dom';

import { DeleteBtn, DecrementBtn, IncrementBtn } from './components';

import s from './Cart.module.css';

const Cart = ({
  dishes = [],
  totalPrice,
  onDelete,
  onGoBack,
  incrementAmount,
  decrementAmount,
  location,
}) =>
  dishes.length > 0 ? (
    <>
      <ul className={s.list}>
        {dishes.map(({ id, name, image, price, amount }) => (
          <li className={s.item} key={id}>
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
            </Link>
            <div className={s.wrap}>
              <p className={s.name}>{name}</p>
              <div className={s.amountWrap}>
                <DecrementBtn
                  decrementAmount={decrementAmount}
                  id={id}
                  amount={amount}
                />
                <p className={s.amountValue}> {amount}</p>
                <IncrementBtn incrementAmount={incrementAmount} id={id} />
              </div>

              <div className={s.priceWrap}>
                <p className={s.price}>{price * amount}</p>
              </div>
            </div>
            <DeleteBtn onDelete={onDelete} id={id} />
          </li>
        ))}
      </ul>
      <div className={s.totalWrap}>
        <div className={s.goBackWrap}>
          <button className={s.goBackBtn} type="button" onClick={onGoBack}>
            Продолжить покупки
          </button>
        </div>
        <div className={s.paymentWrap}>
          <button className={s.paymentBtn} type="button">
            К оплате
          </button>
        </div>
        <p className={s.total}>ИТОГО: {totalPrice}</p>
      </div>
    </>
  ) : (
    <h2>А Вы положили что-нибудь?</h2>
  );
export default Cart;
