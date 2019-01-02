import React from 'react';
import s from './Menu.module.css';

const CategorySelector = props => {
  const { onChange, value, categories } = props;
  return (
    <div>
      <span className={s.category}>Выберите категорию: </span>
      <select
        className={s.selector}
        onChange={e => onChange(e.target.value)}
        value={value}
      >
        {categories.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
