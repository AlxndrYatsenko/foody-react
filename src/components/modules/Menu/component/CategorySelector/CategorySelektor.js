import React from 'react';
import s from '../Menu.module.css';

const CategorySelector = props => {
  const {
    onChange,
    onResetCategory,
    value,
    categories,
    history,
    location,
  } = props;
  return (
    <div>
      <span className={s.category}>Выберите категорию: </span>
      <select
        className={s.selector}
        onChange={({ target }) => onChange(target.value, history, location)}
        value={value}
      >
        <option key="выбрать" disabled label="выбрать" />

        {categories.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
      {value && (
        <button
          className={s.filterCancelBtn}
          type="button"
          onClick={() => onResetCategory(history)}
        >
          Очистить фильтр
        </button>
      )}
    </div>
  );
};

export default CategorySelector;
