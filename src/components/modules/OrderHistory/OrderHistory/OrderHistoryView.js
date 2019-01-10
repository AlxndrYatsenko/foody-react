import React from 'react';
import OrdersTable from './OrdersTable';
import s from './OrderHistory.module.css';

import AddOrderForm from '../AddOrder/AddOrderComponent';
import CurrentOrder from './CurrentOrder';
import Modal from '../../../Modal/Modal';
import Spiner from '../../../Spiner/Spiner';

// import React, { Component } from 'react';

// import OrdersTable from './OrdersTable';
// import s from './OrderHistory.module.css';

// import AddOrderForm from '../AddOrder/AddOrderComponent';
// import CurrentOrder from './CurrentOrder';
// import Modal from '../../../Modal/Modal';
// import Spiner from '../../../Spiner/Spiner';
// import * as API from '../../../../services/api';

// export default class OrderHistory extends Component {
//   state = {
//     orders: [],
//     isLoading: false,
//     currentOrder: {},
//     isOpenModalShowOrder: false,
//     isOpenModalAddOrder: false,
//   };

//   componentDidMount() {
//     API.getAllOrders().then(({ data }) => this.setState({ orders: data }));
//   }

//   handleDeleteOrder = id => {
//     API.deleteOrderById(id).then(
//       this.setState(state => ({
//         orders: state.orders.filter(item => item.id !== id),
//       })),
//     );
//   };

//   handleShowOrder = id => {
//     this.setState({ isLoading: true });
//     API.getOrderById(id).then(order => {
//       this.setState({ currentOrder: order, isLoading: false });
//       this.openModalShowOrder();
//     });
//   };

//   handleAddOrder = order => {
//     const { address, price, rating } = order;
//     API.addOrder({
//       date: new Date().toLocaleDateString('en-US'),
//       price,
//       address,
//       rating,
//     }).then(response =>
//       response.status === 201
//         ? this.setState(prevState => ({
//             orders: [...prevState.orders, response.data],
//           }))
//         : null,
//     );
//   };

//   handleOpenModalAddOrder = () => {
//     this.setState({ isOpenModalAddOrder: true });
//   };

//   handleCloseModalAddOrder = () => {
//     this.setState({ isOpenModalAddOrder: false });
//   };

//   openModalShowOrder = () => {
//     this.setState({ isOpenModalShowOrder: true });
//   };

//   closeModalShowOrder = () => {
//     this.setState({ isOpenModalShowOrder: false });
//   };

//   render() {
//     const {
//       orders,
//       isOpenModalShowOrder,
//       currentOrder,
//       isLoading,
//       isOpenModalAddOrder,
//     } = this.state;
const OrderHistoryView = ({
  orders,
  currentOrder,
  isOpenModalShowOrder,
  isLoading,
  isOpenModalAddOrder,
  onCloseModalShowOrder,
  onOpenModalAddOrder,
  onCloseModalAddOrder,
  onAddOrder,
  onDeleteOrder,
  onShowOrder,
}) => (
  <div className="orderHistoryWrap">
    {isLoading ? (
      <Spiner />
    ) : (
      isOpenModalShowOrder && (
        <Modal onClose={onCloseModalShowOrder}>
          <CurrentOrder
            currentOrder={currentOrder}
            closeModalShowOrder={onCloseModalShowOrder}
          />
        </Modal>
      )
    )}
    <button
      className={s.createOrder}
      type="button"
      onClick={onOpenModalAddOrder}
    >
      Создать заказ
    </button>
    <br />
    {isOpenModalAddOrder && (
      <Modal onClose={onCloseModalAddOrder}>
        <AddOrderForm onAddOrder={onAddOrder} onClose={onCloseModalAddOrder} />
      </Modal>
    )}
    <OrdersTable
      orders={orders}
      onDelete={onDeleteOrder}
      onShowOrder={onShowOrder}
    />
  </div>
);

export default OrderHistoryView;
