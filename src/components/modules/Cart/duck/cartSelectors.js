import { createSelector } from 'reselect';

const getCartIds = state => state.cart.ids;
const getItemsEntities = state => state.entities.items;

const getCartItemsAmounts = state => state.cart.amount;

const getCartItemsAmount = createSelector(
  getCartIds,
  ids => ids.length,
);

const getCartItems = createSelector(
  [getCartIds, getCartItemsAmounts, getItemsEntities],
  (ids, amounts, entities = {}) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);

const getTotalPrice = createSelector(
  getCartItems,
  items => items.reduce((acc, item) => acc + item.price * item.amount, 0),
);

export default {
  getTotalPrice,
  getCartItems,
  getCartItemsAmounts,
  getCartItemsAmount,
};
