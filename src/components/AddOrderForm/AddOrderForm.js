import React, { Component } from 'react';

const INNITIAL_STATE = { address: '', price: '', rating: '' };

export default class AddOrderForm extends Component {
  state = { ...INNITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { address, price, rating } = this.state;
    const { onClose, onAddOrder } = this.props;
    onAddOrder({ address, price, rating });
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
    const { address, price, rating } = this.state;
    const { onClose } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Адрес доставки:
          <input
            name="address"
            type="text"
            onChange={this.handleChange}
            value={address}
            required
          />
        </label>
        <label>
          Цена:
          <input
            name="price"
            type="text"
            onChange={this.handleChange}
            value={price}
            required
          />
        </label>
        <label>
          Рейтинг:
          <input
            name="rating"
            type="text"
            onChange={this.handleChange}
            value={rating}
            required
          />
        </label>
        <button type="submit">Отправить</button>
        <button type="button" onClick={onClose}>
          Закрыть
        </button>
      </form>
    );
  }
}
