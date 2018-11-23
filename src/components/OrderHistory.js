import React from 'react';

const OrderHistory = ({ orders }) => {
  // console.log(orders);
  const row = orders.map(order => (
    <tr key={order.id}>
      <td>{order.date}</td>
      <td>{order.price}</td>
      <td>{order.address}</td>
      <td>{order.rating}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Rating</th>
        </tr>
        {row}
      </tbody>
    </table>
  );
};

export default OrderHistory;
