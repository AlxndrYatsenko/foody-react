import React, { Component } from 'react';
import OrdersTable from './OrdersTable';
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
      this.openModal();
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
            onAddOrder={this.handleAddOrder}
            isOpenModalAddOrder={isOpenModalAddOrder}
          />
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
