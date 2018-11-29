import React, { Component } from 'react';
import styles from './OrderHistory.module.css';

export default class Order extends Component {
  state = {};

  render() {
    const { orders, onDelete, onShowOrder } = this.props;
    const { tableRow } = styles;

    return orders.map(({ id, date, price, address, rating }) => (
      <tr className={tableRow} key={id}>
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
        <td>
          <button
            type="button"
            id={id}
            onClick={() => {
              onDelete(id);
            }}
          >
            Удалить
          </button>
        </td>
      </tr>
    ));
  }
}
