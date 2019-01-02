import React from 'react';
import styles from './OrderHistory.module.css';

const OrdersTable = props => {
  const { orders, onDelete, onShowOrder } = props;
  return (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        <tr className={styles.tableRow}>
          <th className={styles.date}>Date</th>
          <th className={styles.price}>Price</th>
          <th className={styles.address}>Delivery address</th>
          <th className={styles.rating}>Rating</th>
        </tr>
        {orders.map(({ id, date, price, address, rating }) => (
          <tr className={styles.tableRow} key={id}>
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
                Детальнее{' '}
              </button>
            </td>
            <td>
              <button
                type="button"
                id={id}
                onClick={() => {
                  onDelete(id);
                }}
              >
                {' '}
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
