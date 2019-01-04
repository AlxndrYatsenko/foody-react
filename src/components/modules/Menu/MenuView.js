import React from 'react';
// import { Link } from 'react-router-dom';

import CategorySelector from './CategorySelector/CategotySelektor';
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
}) => (
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
      value={category}
      categories={categories}
      history={history}
      location={location}
      onResetCategory={onResetCategory}
    />

    {category && (
      <p>
        Текущий фильтр: <b>{category}</b>
      </p>
    )}
    <ItemList menuItems={menuItems} match={match} location={location} />
  </div>
);
export default MenuView;
