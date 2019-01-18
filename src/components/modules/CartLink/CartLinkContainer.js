import { connect } from 'react-redux';

import CartLink from './CartLink';

import { cartSelectors } from '../Cart/duck';

const mstp = state => ({
  amount: cartSelectors.getCartProductsAmount(state),
});

export default connect(mstp)(CartLink);
