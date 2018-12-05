import React, { Component } from 'react';
import OrdersTable from './OrdersTable';
import styles from './OrderHistory.module.css';
import Modal from '../Modal/Modal';
import AddOrderForm from '../AddOrderForm/AddOrderForm';
import Spiner from '../Spiner/Spiner';
import * as API from '../../services/api';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isLoading: false,
    orderForModal: {},
    isOpenModalShowOrder: false,
    isOpenModalAddOrder: false,
  };

  componentDidMount() {
    API.getAllOrders().then(orders => this.setState({ orders: orders.data }));
  }

  handleDeleteOrder = id => {
    API.deleteOrderById(id).then(
      this.setState(state => ({
        orders: state.orders.filter(item => item.id !== id),
      })),
    );
  };

  handleShowOrder = id => {
    this.setState({ isLoading: true });
    API.getOrderById(id).then(order => {
      this.setState({ orderForModal: order, isLoading: false });
      this.openModalShowOrder();
    });
  };

  handleAddOrder = order => {
    const { address, price, rating } = order;
    API.addOrder({
      date: new Date().toLocaleDateString('en-US'),
      price,
      address,
      rating,
    }).then(response =>
      response.status === 201
        ? this.setState(prevState => ({
            orders: [...prevState.orders, response.data],
          }))
        : null,
    );
  };

  handleOpenModalAddOrder = () => {
    this.setState({ isOpenModalAddOrder: true });
  };

  handleCloseModalAddOrder = () => {
    this.setState({ isOpenModalAddOrder: false });
  };

  openModalShowOrder = () => {
    this.setState({ isOpenModalShowOrder: true });
  };

  closeModalShowOrder = () => {
    this.setState({ isOpenModalShowOrder: false });
  };

  render() {
    const {
      orders,
      isOpenModalShowOrder,
      orderForModal,
      isLoading,
      isOpenModalAddOrder,
    } = this.state;
    const { date, price, address, rating } = orderForModal;

    const { list } = styles;

    return (
      <div className="orderHistoryWrap">
        {isLoading ? (
          <Spiner />
        ) : (
          isOpenModalShowOrder && (
            <Modal onClose={this.closeModalShowOrder}>
              <div className={list}>
                <p className={date}>
                  Дата заказа: <b>{date}</b>
                </p>
                <p className={price}>
                  Цена: <b>{price}</b>
                </p>
                <p className={address}>
                  Адресс доставки: <b>{address}</b>
                </p>
                <p className={rating}>
                  Рейтинг: <b>{rating}</b>
                </p>
                <button
                  className="close-btn"
                  type="button"
                  onClick={this.closeModalShowOrder}
                >
                  Закрыть
                </button>
              </div>
            </Modal>
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
          <Modal onClose={this.handleCloseModalAddOrder}>
            <AddOrderForm
              onAddOrder={this.handleAddOrder}
              onClose={this.handleCloseModalAddOrder}
            />
          </Modal>
        )}
        <OrdersTable
          orders={orders}
          onDelete={this.handleDeleteOrder}
          onShowOrder={this.handleShowOrder}
        />
      </div>
    );
  }
}
