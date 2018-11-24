import React from 'react';

const DishFilter = ({ filter, onFilterChange }) => (
  <input type="text" value={filter} onChange={onFilterChange} />
);

export default DishFilter;
