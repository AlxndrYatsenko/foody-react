import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from './Cart';

import { cartActions, cartSelectors } from './duck';
import { menuOperations, menuSelectors } from '../Menu/duck';

class CartContainer extends Component {
  componentDidMount() {
    const { fetchMenuItems, items } = this.props;

    if (!items) fetchMenuItems();
  }

  goBack = () => {
    const { history, location } = this.props;
    history.push({
      pathname: '/menu',
      state: { from: location },
    });
  };

  render() {
    const { items } = this.props;
    return items ? <Cart {...this.props} onGoBack={this.goBack} /> : null;
  }
}

const mstp = state => ({
  items: menuSelectors.getItems(state),
  dishes: cartSelectors.getCartItems(state),
  totalPrice: cartSelectors.getTotalPrice(state),
});
const mdtp = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  decrementAmount: cartActions.decrementAmount,
  incrementAmount: cartActions.incrementAmount,
  onDelete: cartActions.deleteFromCart,
};

export default connect(
  mstp,
  mdtp,
)(CartContainer);
