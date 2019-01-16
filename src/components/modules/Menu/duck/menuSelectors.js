import queryString from 'query-string';

const getCommentsIds = state => state.comments;
const getComments = state => state.entities.comments;

const getItemsIds = state => state.items.ids;
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

// const getFiltred = state => {
//   const filter = getFilter(state);
//   console.log(filter);
// };

const getSelectedItem = state => id => {
  const items = getItems(state);
  const ids = getItemsIds(state);
  // console.log(ids.find(items[id]));
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
  // const ids = getItemsIds(state);
  const items = getItems(state);

  console.log(items);
  console.log(item);
  console.log(items[item]);
  return items[item];
};
// const getCurrentItemId = state => state.items.currentItem.id;
// =======OLD=======
// const getItems = state => state.items;

// const getFilter = state => state.filter;

const getCategories = state => state.categories;

// const getVisibleMenuItems = state => {
//   const items = getAllItems(state);
//   const filter = getFilter(state);
//   const category = getCategory(state);

//   // console.log(items, filter, category);

//   const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase()),
//   );

//   return filteredItems.filter(item => item.category.includes(category));
// };

const getCategoryfromLocation = ({ search }) => {
  const { category } = queryString.parse(search);

  return category;
};

export default {
  // =========NEW==============
  getSelectedItemsWithCategory,
  getSelectedItem,
  getCommentsIds,
  getAllComments,
  getAllItems,
  getCurrentItem,
  // getCurrentItemId,
  // getComments,
  // =========OLD==============
  // getItems,
  getFilter,
  getCategory,
  getCategories,
  getVisibleMenuItems,
  getCategoryfromLocation,
};
