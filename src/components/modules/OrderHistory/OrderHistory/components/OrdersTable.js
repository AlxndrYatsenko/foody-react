import React from 'react';
import s from '../OrderHistory.module.css';

const OrdersTable = props => {
  const { orders, onShowOrder } = props;
  return (
    <table className={s.table}>
      <tbody className={s.tableBody}>
        <tr className={s.tableRow}>
          <th className={s.date}>Date</th>
          <th className={s.price}>Price</th>
          <th className={s.address}>Delivery address</th>
          <th className={s.rating}>Rating</th>
        </tr>
        {orders.map(({ id, date, price, address, rating }) => (
          <tr className={s.tableRow} key={id}>
            <td>{date}</td>
            <td>{price}</td>
            <td>{address}</td>
            <td>{rating}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  onShowOrder(id);
                }}
              >
                Детальнее
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
