import { createSelector } from 'reselect';

// const getItemsIds = state => state.items;
const getCartIds = state => state.cart.ids;
const getItemsEntities = state => state.entities.items;

const getCartItems = createSelector(
  [getCartIds, getItemsEntities],
  (ids, items) => ids.map(id => items[id]),
);

const getCartItemsAmounts = state => state.cart.amount;

const getCartProductsAmount = createSelector(
  getCartIds,
  ids => ids.length,
);

const getCartProducts = createSelector(
  [getCartIds, getCartItemsAmounts, getItemsEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);
export default {
  getCartItems,
  getCartItemsAmounts,
  getCartProducts,
  getCartProductsAmount,
};
