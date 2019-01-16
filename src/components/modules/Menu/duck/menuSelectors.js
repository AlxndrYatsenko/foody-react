import queryString from 'query-string';

const getCommentsIds = state => state.comments;
const getComments = state => state.entities.comments;

const getItemsIds = state => state.items;
const getItems = state => state.entities.items;

const getAllComments = state => {
  const ids = getCommentsIds(state);
  const comments = getComments(state);

  return ids.map(id => id === comments[ids]);
};

const getAllItems = state => {
  const ids = getItemsIds(state);
  const items = getItems(state);
  return ids.map(id => items[id]);
};

const getCategory = state => state.category;

const getSelectedItemsWithCategory = state => {
  const category = getCategory(state);
  const allItems = getAllItems(state);

  if (!category) return allItems;

  const selectedItems = [];

  allItems.forEach(item => {
    if (item.category === category) {
      selectedItems.push(item);
    }
  });

  return selectedItems;
};

const getFilter = state => state.filter;

const getSelectedItem = state => id => {
  const items = getItems(state);
  const ids = getItemsIds(state);
  return ids.find(items[id]);
};

const getVisibleMenuItems = state => {
  const selectedItemsWithCategory = getSelectedItemsWithCategory(state);

  const filter = getFilter(state);

  return selectedItemsWithCategory.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const getItem = state => state.items.currentItem;

const getCurrentItem = state => {
  const item = getItem(state);
  const items = getItems(state);

  return items ? items[item] : null;
};

const getCategories = state => state.categories;

const getCategoryfromLocation = ({ search }) => {
  const { category } = queryString.parse(search);

  return category;
};

export default {
  getSelectedItemsWithCategory,
  getSelectedItem,
  getCommentsIds,
  getAllComments,
  getAllItems,
  getCurrentItem,
  getFilter,
  getCategory,
  getCategories,
  getVisibleMenuItems,
  getCategoryfromLocation,
};
