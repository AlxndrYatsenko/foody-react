import { createSelector } from 'reselect';

import queryString from 'query-string';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

const getCategories = state => state.categories;
const getCategory = props => getCategoryFromProps(props);
const getFilter = state => state.filter;
const getItemsIds = state => state.items;
const getItems = state => state.entities.items;

const getAllItems = createSelector(
  [getItemsIds, getItems],
  (ids, items) => ids.map(id => items[id]),
);

const getSelectedItemsWithCategory = createSelector(
  [(state, props) => getCategoryFromProps(props), getAllItems],
  (category, allItems) => {
    if (!category) return allItems;

    const selectedItems = [];

    allItems.forEach(item => {
      if (item.category === category) {
        selectedItems.push(item);
      }
    });
    return selectedItems;
  },
);

const getVisibleMenuItems = createSelector(
  [getSelectedItemsWithCategory, getFilter],
  (selectedItemsWithCategory, filter) =>
    selectedItemsWithCategory.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export default {
  getItems,
  getCategories,
  getCategory,
  getFilter,
  getSelectedItemsWithCategory,
  getVisibleMenuItems,
};
