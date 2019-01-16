import React from 'react';

import CategorySelector from './components/CategorySelector/CategorySelektor';
import Filter from './components/Filter/Filter';
import ItemList from './components/ItemList/ItemList';
import LinkToAddMenuItem from './components/LinkToAddMenuItem/LinkToAddMenuItem';

import s from './Menu.module.css';

const Menu = ({
  filter,
  categories,
  menuItems,
  category,
  match,
  history,
  location,
  onChangeCategory,
  onResetCategory,
  onFilterChange,
  // onDeleteItem,
  selectItem,
  error,
}) => (
  <>
    {error && <p>{error.message}</p>}
    {/* {console.log(menuItems)} */}
    <div className={s.menu}>
      <LinkToAddMenuItem match={match} location={location} />
      <Filter
        filter={filter}
        onFilterChange={({ target }) => onFilterChange(target.value)}
      />
      <CategorySelector
        onChange={onChangeCategory}
        category={category}
        categories={categories}
        history={history}
        location={location}
        onResetCategory={onResetCategory}
      />
      <ItemList
        menuItems={menuItems}
        selectItem={selectItem}
        // onDeleteItem={onDeleteItem}
        match={match}
        location={location}
      />
    </div>
  </>
);
export default Menu;
