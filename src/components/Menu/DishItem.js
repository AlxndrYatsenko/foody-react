import React from 'react';
import s from './Menu.module.css';

const DishItem = ({
  currentDish: { image, price, ingredients, name, description },
}) => (
  <div>
    <img className={s.image} src={image} alt={name} />
    <p className={s.name}>{name}</p>
    <p className={s.price}>Цена: {price} денег</p>
    <p className={s.description}>{description}</p>
    <p className={s.ingrTitle}>Ингридиенты:</p>
    <ul className={s.ingredients}>
      <br />
      {ingredients && ingredients.map(ingr => <li key={ingr}>{ingr}</li>)}
    </ul>
  </div>
);

export default DishItem;
