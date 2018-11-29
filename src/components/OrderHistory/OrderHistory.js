import React, { Component } from 'react';
import Order from './Order';
import styles from './OrderHistory.module.css';
import ModalOrder from '../ModalOrder/ModalOrder';
import AddOrderForm from '../OrderForm/AddOrderForm';
import Spiner from '../Spiner/Spiner';
import * as API from '../../services/api';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isLoading: false,
    orderForModal: {},
    isOpenModalOrder: false,
    isOpenModalAddOrder: false,
  };

  componentDidMount() {
    API.getAllOrders().then(orders => this.setState({ orders: orders.data }));
  }

  handleDeleteOrder = id => {
    API.deleteOrderById(id);
    this.setState(state => ({
      orders: state.orders.filter(item => item.id !== id),
    }));
  };

  handleShowOrder = id => {
    this.setState({ isLoading: true });
    API.getOrderById(id).then(order => {
      this.setState({ orderForModal: order, isLoading: false });
      this.openModal();
    });
  };

  handleUpdateOrdersHistory = order => {
    this.setState(prevState => ({ orders: [...prevState.orders, order] }));
  };

  handleOpenModalAddOrder = () => {
    this.setState({ isOpenModalAddOrder: true });
  };

  handleCloseModalAddOrder = () => {
    this.setState({ isOpenModalAddOrder: false });
  };

  openModal = () => {
    this.setState({ isOpenModalOrder: true });
  };

  closeModal = () => {
    this.setState({ isOpenModalOrder: false });
  };

  render() {
    const {
      orders,
      isOpenModalOrder,
      orderForModal,
      isLoading,
      isOpenModalAddOrder,
    } = this.state;
    const { id, date, price, address, rating } = orderForModal;

    return (
      <div className="orderHistoryWrap">
        {isLoading ? (
          <Spiner />
        ) : (
          isOpenModalOrder && (
            <ModalOrder
              onClose={this.closeModal}
              id={id}
              date={date}
              price={price}
              address={address}
              rating={rating}
            />
          )
        )}
        <button
          className={styles.createOrder}
          type="button"
          onClick={this.handleOpenModalAddOrder}
        >
          Создать заказ
        </button>
        <br />
        {isOpenModalAddOrder && (
          <AddOrderForm
            onClose={this.handleCloseModalAddOrder}
            onAddOrder={this.handleUpdateOrdersHistory}
            isOpenModalAddOrder={isOpenModalAddOrder}
          />
        )}
        <table className={styles.table}>
          <tbody className={styles.tableBody}>
            <tr className={styles.tableRow}>
              <th className={styles.date}>Date</th>
              <th className={styles.price}>Price</th>
              <th className={styles.address}>Delivery address</th>
              <th className={styles.rating}>Rating</th>
            </tr>
            <Order
              orders={orders}
              onDelete={this.handleDeleteOrder}
              onNewOrder={this.handleAddOrder}
              onShowOrder={this.handleShowOrder}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
