import React, { Component } from 'react';

import OrderHistoryView from './OrderHistoryView';

import * as API from '../../../../services/api';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isLoading: false,
    currentOrder: {},
    isOpenModalShowOrder: false,
    isOpenModalAddOrder: false,
  };

  componentDidMount() {
    API.getAllOrders().then(({ data }) => this.setState({ orders: data }));
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
      this.setState({ currentOrder: order, isLoading: false });
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
      currentOrder,
      isOpenModalShowOrder,
      isLoading,
      isOpenModalAddOrder,
    } = this.state;

    return (
      <OrderHistoryView
        orders={orders}
        currentOrder={currentOrder}
        isOpenModalShowOrder={isOpenModalShowOrder}
        isLoading={isLoading}
        isOpenModalAddOrder={isOpenModalAddOrder}
        onCloseModalShowOrder={this.closeModalShowOrder}
        onOpenModalAddOrder={this.handleOpenModalAddOrder}
        onCloseModalAddOrder={this.handleCloseModalAddOrder}
        onAddOrder={this.handleAddOrder}
        onDeleteOrder={this.handleDeleteOrder}
        onShowOrder={this.handleShowOrder}
      />
    );
  }
}
