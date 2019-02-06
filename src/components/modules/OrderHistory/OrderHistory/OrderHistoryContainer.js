import React, { Component } from 'react';

import OrderHistory from './OrderHistory';

import * as API from '../../../../services/api';

export default class OrderHistoryContainer extends Component {
  state = {
    orders: [],
    isLoading: false,
    currentOrder: {},
    isOpenModalShowOrder: false,
    isOpenModalAddOrder: false,
    error: '',
  };

  componentDidMount() {
    API.getAllOrders()
      .catch(error => this.setState({ error }))
      .then(orders => this.setState({ orders }));
  }

  handleShowOrder = id => {
    this.setState({ isLoading: true });
    API.getOrderById(id)
      .then(order => {
        this.setState({ currentOrder: order, isLoading: false });
        this.openModalShowOrder();
      })
      .catch(error => this.setState({ error }));
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
    return (
      <OrderHistory
        {...this.state}
        onCloseModalShowOrder={this.closeModalShowOrder}
        onOpenModalAddOrder={this.handleOpenModalAddOrder}
        onCloseModalAddOrder={this.handleCloseModalAddOrder}
        onShowOrder={this.handleShowOrder}
      />
    );
  }
}
