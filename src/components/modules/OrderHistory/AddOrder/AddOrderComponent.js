import React, { Component } from 'react';

import AddOrderView from './AddOrderView';

const INNITIAL_STATE = { address: '', price: '', rating: '', error: '' };

export default class AddOrderComponent extends Component {
  state = { ...INNITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { address, price, rating } = this.state;
    const { onClose, onAddOrder } = this.props;

    onAddOrder({ address, price, rating }).catch(error => this.setState(error));

    this.setState({ ...INNITIAL_STATE });
    onClose();
  };

  handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    const { name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { onClose } = this.props;
    return (
      <AddOrderView
        {...this.state}
        onClose={onClose}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}
