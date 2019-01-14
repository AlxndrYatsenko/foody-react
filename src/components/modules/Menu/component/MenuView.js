import React from 'react';

import CategorySelector from './CategorySelector/CategorySelektor';
import Filter from './Filter/Filter';
import ItemList from './ItemList/ItemList';
import LinkToAddMenuItem from './LinkToAddMenuItem/LinkToAddMenuItem';

import s from './Menu.module.css';

const MenuView = ({
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
  onDeleteItem,
  error,
}) => (
  <>
    {error && <p>{error.message}</p>}
    <div className={s.menu}>
      <div className={s.addLinkContainer}>
        <LinkToAddMenuItem match={match} location={location} />
      </div>
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
        onDeleteItem={onDeleteItem}
        match={match}
        location={location}
      />
    </div>
  </>
);
export default MenuView;
