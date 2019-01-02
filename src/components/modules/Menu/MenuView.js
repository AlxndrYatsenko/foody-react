import React from 'react';
import { Link } from 'react-router-dom';

import CategorySelector from './CategotySelektor';
import Filter from './Filter';

import s from './Menu.module.css';

const MenuView = ({
  filter,
  categories,
  menuItems,
  category,
  match,
  location,
  onCategoryChange,
  onSelectClear,
  onFilterChange,
}) => (
  <div className={s.menu}>
    <div className={s.addLinkContainer}>
      <Link
        className={s.addLink}
        to={{
          pathname: `${match.url}/add`,
          state: { from: location },
        }}
      >
        Добавить элемент меню
      </Link>
    </div>
    <div className={s.filterContainer}>
      <Filter
        filter={filter}
        onFilterChange={({ target }) => onFilterChange(target.value)}
      />
      <br />
      <CategorySelector
        onChange={onCategoryChange}
        value={category}
        categories={categories}
      />
      {category && (
        <button
          className={s.filterCancelBtn}
          type="button"
          onClick={onSelectClear}
        >
          Очистить фильтр
        </button>
      )}
    </div>
    {category && (
      <p>
        Текущий фильтр: <b>{category}</b>
      </p>
    )}

    <ul className={s.list}>
      {menuItems.map(({ id, name, image, price }) => (
        <li className={s.item} key={id}>
          <Link
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            <div className={s.imgComtainer}>
              <img className={s.img} src={image} alt={name} />
            </div>
            <p className={s.name}>{name}</p>
            <p className={s.price}>Цена: {price} денег</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default MenuView;
