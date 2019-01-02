import React from 'react';
import s from './Menu.module.css';

const Filter = ({ filter, onFilterChange }) => (
  <div>
    <span className={s.filter}>Поиск: </span>
    <input type="text" value={filter} onChange={onFilterChange} />
  </div>
);

export default Filter;
