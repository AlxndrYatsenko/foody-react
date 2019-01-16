import React from 'react';
import s from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => (
  <div className={s.filterContainer}>
    <span className={s.filter}>Поиск: </span>
    <input type="text" value={filter} onChange={onFilterChange} />
  </div>
);

export default Filter;
