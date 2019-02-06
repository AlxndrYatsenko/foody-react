import React from 'react';

import CategorySelector from './components/CategorySelector/CategorySelektor';
import Filter from './components/Filter/Filter';
import ItemList from './components/ItemList/ItemList';

import s from './Menu.module.css';

const Menu = ({
  filter,
  categories,
  menuItems,
  category,
  match,
  location,
  addToCart,
  onChangeCategory,
  onResetCategory,
  onFilterChange,
  error,
}) => (
  <>
    {error && <p>{error.message}</p>}
    <div className={s.menu}>
      <Filter
        filter={filter}
        onFilterChange={({ target }) => onFilterChange(target.value)}
      />
      <CategorySelector
        onChange={onChangeCategory}
        category={category}
        categories={categories}
        onResetCategory={onResetCategory}
      />
      <ItemList
        menuItems={menuItems}
        addToCart={addToCart}
        match={match}
        location={location}
      />
    </div>
  </>
);
export default Menu;
