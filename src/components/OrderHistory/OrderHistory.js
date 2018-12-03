import React, { Component } from 'react';
import OrdersTable from './OrdersTable';
import styles from './OrderHistory.module.css';
import Modal from '../Modal/Modal';
import Spiner from '../Spiner/Spiner';
import * as API from '../../services/api';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isLoading: false,
    orderForModal: {},
    isOpenModalShowOrder: false,
    isOpenModalAddOrder: false,
    inputAddress: '',
    inputPrice: '',
    inputRating: '',
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
    const { inputAddress, inputPrice, inputRating } = order;
    API.addOrder({
      date: new Date().toLocaleDateString('en-US'),
      price: inputPrice,
      address: inputAddress,
      rating: inputRating,
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

  handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    const { name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputAddress, inputPrice, inputRating } = this.state;
    this.handleAddOrder({ inputAddress, inputPrice, inputRating });
    this.setState({ inputAddress: '', inputPrice: '', inputRating: '' });
    this.handleCloseModalAddOrder();
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
    const { inputAddress, inputPrice, inputRating } = this.state;
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
            <form onSubmit={this.handleSubmit}>
              <label>
                Адрес доставки:
                <input
                  name="inputAddress"
                  type="text"
                  onChange={this.handleChange}
                  value={inputAddress}
                  required
                />
              </label>
              <label>
                Цена:
                <input
                  name="inputPrice"
                  type="text"
                  onChange={this.handleChange}
                  value={inputPrice}
                  required
                />
              </label>
              <label>
                Рейтинг:
                <input
                  name="inputRating"
                  type="text"
                  onChange={this.handleChange}
                  value={inputRating}
                  required
                />
              </label>
              <button type="submit">Отправить</button>
              <button type="submit" onClick={this.handleCloseModalAddOrder}>
                Закрыть
              </button>
            </form>
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
