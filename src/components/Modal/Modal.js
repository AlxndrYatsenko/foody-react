import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
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
    if (target !== this.containerRef.current) return;
    const { onClose } = this.props;
    onClose();
  };

  handleESCWindow = e => {
    const keyDown = e.keyCode;
    if (keyDown !== 27) return;
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { children } = this.props;
    const { backDrop, modal } = styles;
    return (
      <div className={backDrop} ref={this.containerRef}>
        <div className={modal}>{children}</div>
      </div>
    );
  }
}
