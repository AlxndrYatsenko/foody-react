import React from 'react';
import { Link } from 'react-router-dom';

// onDeleteDish;

const Menu = ({ dishList, match }) => {
  // console.log(props);

  const dish = dishList.map(({ id, name }) => (
    <li className="list-item" key={id}>
      <Link to={`${match.url}/${id}`}>{name}</Link>
      {/* to={`${match.url}/${id}`} */}

      {/* <div className="item-wrap">
        <img
          className="item-image"
          src={image}
          alt={name}
          width="150px"
          height="auto"
        />
        <p className="item-name">Name: {name}</p>
        <p className="item-prise">Price: {price}$</p>
      </div>
      <p className="item-description">{description}</p>
      <button
        type="button"
        className="item-buttton"
        onClick={() => onDeleteDish(id)}
      >
        Удалить
      </button>
      <hr /> */}
    </li>
  ));

  return (
    <ul className="menu-list">
      {dish}
      <br />
    </ul>
  );
};

export default Menu;
