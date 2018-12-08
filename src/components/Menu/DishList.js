import React from 'react';

const Menu = ({ dishList, onDeleteDish }) => {
  const dish = dishList.map(({ id, name, price, image, description }) => (
    <li className="list-item" key={id}>
      <div className="item-wrap">
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
      <hr />
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
