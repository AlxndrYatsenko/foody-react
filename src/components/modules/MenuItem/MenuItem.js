import React from 'react';

import s from './MenuItem.module.css';

const MenuItem = ({
  goBack,
  currentItem: { image, price, ingredients, name, description },
}) => (
  <div className={s.container}>
    <button className={s.goBackBtn} onClick={goBack} type="button">
      Назад к меню
    </button>
    <div className={s.wrap}>
      <div className={s.info}>
        <img className={s.image} src={image} alt={name} width={420} />
      </div>
      <div className={s.info}>
        <p className={s.name}>{name}</p>
        <p className={s.price}>Цена: {price} денег</p>
        <p className={s.description}>{description}</p>
        <p className={s.ingrTitle}>Ингридиенты:</p>
        <ul className={s.ingredients}>
          <br />
          {ingredients && ingredients.map(ingr => <li key={ingr}>{ingr}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export default MenuItem;
