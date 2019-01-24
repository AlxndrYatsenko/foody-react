import types from './cartActionsTypes';

const deleteFromCart = id => ({
  type: types.DELETE_FROM_CART,
  payload: { id },
});

const incrementAmount = id => ({
  type: types.INCREMENT_AMOUNT,
  payload: { id },
});

const decrementAmount = id => ({
  type: types.DECREMENT_AMOUNT,
  payload: { id },
});

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: { id },
});

export default {
  addToCart,
  deleteFromCart,
  incrementAmount,
  decrementAmount,
};
