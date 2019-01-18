// import React from 'react';
import { connect } from 'react-redux';

import Cart from './Cart';

import { cartActions, cartSelectors } from './duck';

const mstp = state => ({
  dishes: cartSelectors.getCartProducts(state),
});
const mdtp = {
  decrementAmount: cartActions.decrementAmount,
  incrementAmount: cartActions.incrementAmount,
  onDelete: cartActions.deleteDish,
};

export default connect(
  mstp,
  mdtp,
)(Cart);
