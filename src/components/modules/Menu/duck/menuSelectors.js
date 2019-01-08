import queryString from 'query-string';

const getItems = state => state.menu.items;

const getFilter = state => state.menu.filter;

const getCategory = state => state.menu.category;

const getVisibleMenuItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const category = getCategory(state);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return filteredItems.filter(item => item.category.includes(category));
};

const getCategoryfromLocation = ({ search }) => {
  const { category } = queryString.parse(search);
  // console.log(category);

  return category;
  // {
  //   type: types.GET_CATEGORY,
  //   payload: category || '',
  // };
};

export default {
  getItems,
  getFilter,
  getCategory,
  getVisibleMenuItems,
  getCategoryfromLocation,
};
