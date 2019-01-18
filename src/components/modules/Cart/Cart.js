import React from 'react';

const Cart = ({ dishes = [], onDelete, incrementAmount, decrementAmount }) =>
  dishes.length > 0 ? (
    <table>
      <tbody>
        {dishes.map(({ id, name, price, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button type="button" onClick={decrementAmount}>
                -
              </button>
              {amount}
              <button type="button" onClick={incrementAmount}>
                +
              </button>
            </td>
            <td>{price}</td>
            <td>
              <button type="button" onClick={onDelete}>
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h3>В корзине нет товаров!</h3>
  );
export default Cart;
