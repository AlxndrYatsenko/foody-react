import React, { Component, createRef } from 'react';
import modalStyles from '../ModalOrder/Modal.module.css';
import * as API from '../../services/api';

const INITIAL_STATE = { address: '', price: '', rating: '' };

export default class AddOrderForm extends Component {
  containerRef = createRef();

  state = { ...INITIAL_STATE };

  componentDidMount() {
    window.addEventListener('click', this.handleClickWindow);
    window.addEventListener('keydown', this.handleESCWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickWindow);
    window.removeEventListener('keydown', this.handleESCWindow);
  }

  handleClickWindow = e => {
    const backdropRef = this.containerRef.current;
    const { onClose } = this.props;
    if (e.target === backdropRef) {
      onClose();
    }
  };

  handleESCWindow = e => {
    const keyDown = e.keyCode;
    const { onClose } = this.props;
    if (keyDown === 27) {
      onClose();
    }
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
    const { address, price, rating } = this.state;
    const { onClose, onAddOrder } = this.props;

    API.addOrder({
      date: new Date().toLocaleDateString('en-US'),
      price,
      address,
      rating,
    }).then(response => {
      if (response.status === 201) onAddOrder(response.data);
    });

    this.setState({ ...INITIAL_STATE });
    onClose();
  };

  render() {
    const { address, price, rating } = this.state;
    const { backDrop, modal, label, input } = modalStyles;
    return (
      <div className={backDrop} ref={this.containerRef}>
        <form className={modal} onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    );
  }
}
