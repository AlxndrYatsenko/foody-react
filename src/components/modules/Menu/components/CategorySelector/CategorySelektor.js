import React from 'react';
import s from '../../Menu.module.css';

const CategorySelector = props => {
  const {
    onChange,
    onResetCategory,
    category,
    categories,
    history,
    location,
  } = props;
  return (
    <div className={s.selectorContainer}>
      <span className={s.category}>Выберите категорию: </span>
      <select
        className={s.selector}
        onChange={({ target }) => onChange(target.value, history, location)}
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
        <button
          className={s.filterCancelBtn}
          type="button"
          onClick={() => onResetCategory(history)}
        >
          Очистить фильтр
        </button>
      )}
      {category && (
        <p>
          Текущий фильтр: <b>{category}</b>
        </p>
      )}
    </div>
  );
};

export default CategorySelector;
