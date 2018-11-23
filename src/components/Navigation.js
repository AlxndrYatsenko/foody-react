import React from 'react';

const Navigation = ({ navList }) => {
  const li = navList.map(item => (
    <li key={item}>
      <a className="navLink" href="/">
        {item}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul>{li}</ul>
    </nav>
  );
};
export default Navigation;
