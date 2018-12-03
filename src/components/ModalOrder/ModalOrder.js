import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

export default class ModalOrder extends Component {
  containerRef = createRef();

  state = {};

  componentDidMount() {
    window.addEventListener('click', this.handleCloseModal);
    window.addEventListener('keydown', this.handleESCWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleCloseModal);
    window.removeEventListener('keydown', this.handleESCWindow);
  }

  handleCloseModal = ({ target }) => {
    const isTargetInsideContainer = this.containerRef.current.contains(target);
    const { onClose } = this.props;
    if (!isTargetInsideContainer) onClose();
  };

  handleESCWindow = e => {
    const keyDown = e.keyCode;
    const { onClose } = this.props;
    if (keyDown === 27) {
      onClose();
    }
  };

  render() {
    const { date, price, address, rating, onClose } = this.props;
    const { backDrop, modal, list } = styles;
    return (
      <div className={backDrop}>
        <div className={modal}>
          <ul className={list} ref={this.containerRef}>
            <li className={date}>
              Дата заказа: <b>{date}</b>
            </li>
            <li className={price}>
              Цена: <b>{price}</b>
            </li>
            <li className={address}>
              Адресс доставки: <b>{address}</b>
            </li>
            <li className={rating}>
              Рейтинг: <b>{rating}</b>
            </li>
            <button className="close-btn" type="button" onClick={onClose()}>
              Закрыть
            </button>
          </ul>
        </div>
      </div>
    );
  }
}
