import React from 'react';

import s from './CategorySelektor.module.css';

const CategorySelector = ({
  onChange,
  onResetCategory,
  category,
  categories,
}) => (
  <div className={s.selectorContainer}>
    <span className={s.category}>Выберите категорию: </span>
    <select
      className={s.selector}
      onChange={({ target }) => onChange(target.value)}
      value={category}
    >
      <option key="выбрать" disabled label="выбрать" />

      {categories.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
    {category && (
      <>
        <p>
          Текущий фильтр: <b>{category}</b>
        </p>
        <button
          className={s.cancelBtn}
          type="button"
          onClick={() => onResetCategory()}
        >
          Очистить фильтр
        </button>
      </>
    )}
  </div>
);

export default CategorySelector;
