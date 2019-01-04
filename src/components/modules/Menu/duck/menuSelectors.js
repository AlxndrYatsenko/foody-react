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

export default { getItems, getFilter, getCategory, getVisibleMenuItems };
