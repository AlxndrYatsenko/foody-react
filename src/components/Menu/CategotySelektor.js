import React from 'react';

const CategorySelector = props => {
  const { onChange, value, categories } = props;
  return (
    <select onChange={e => onChange(e.target.value)} value={value}>
      {categories.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
