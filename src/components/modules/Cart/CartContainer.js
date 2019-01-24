// import React from 'react';
import { connect } from 'react-redux';

import Cart from './Cart';

import { cartActions, cartSelectors } from './duck';

const mstp = state => ({
  dishes: cartSelectors.getCartItems(state),
  totalPrice: cartSelectors.getTotalPrice(state),
});
const mdtp = {
  decrementAmount: cartActions.decrementAmount,
  incrementAmount: cartActions.incrementAmount,
  onDelete: cartActions.deleteFromCart,
};

export default connect(
  mstp,
  mdtp,
)(Cart);
