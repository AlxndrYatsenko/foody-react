const getItems = state => state.menu.items;

const getFilter = state => state.menu.filter;

const getVisibleMenuItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);

  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default { getItems, getFilter, getVisibleMenuItems };
