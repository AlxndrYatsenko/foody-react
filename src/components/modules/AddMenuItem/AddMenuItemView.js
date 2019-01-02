import React from 'react';
import s from './AddMenuItem.module.css';

const AddMenuItemView = ({
  name,
  price,
  image,
  description,
  category,
  allIngredients,
  ingredients,
  selectedIngredient,
  categories,
  onSubmit,
  onChange,
  onCategoryChange,
  onIngredientsChange,
  onGoBack,
  onCancelBnt,
}) => (
  <form className={s.form} onSubmit={onSubmit}>
    <label>
      Название:
      <br />
      <input
        name="name"
        type="text"
        onChange={onChange}
        value={name}
        required
      />
    </label>

    <label>
      Описание:
      <br />
      <textarea
        name="description"
        type="text"
        onChange={onChange}
        value={description}
        rows="3"
        required
      />
    </label>

    <label>
      URL изображения:
      <br />
      <input
        name="image"
        type="text"
        onChange={onChange}
        value={image}
        required
      />
    </label>

    <label>
      Категория:
      <br />
      <select onChange={onCategoryChange} value={category}>
        <option key="выбрать">выбрать</option>
        {categories.map(o => (
          <option key={o.id} value={o.name}>
            {o.name}
          </option>
        ))}
      </select>
    </label>

    <label>
      <br />
      Ингридиенты:
      <select onChange={onIngredientsChange} value={selectedIngredient}>
        <option key="выбрать">выбрать</option>
        {allIngredients.map(ingr => (
          <option key={ingr} value={ingr}>
            {ingr}
          </option>
        ))}
      </select>
    </label>

    {ingredients.length > 0 && (
      <div className={s.ingredients}>
        {ingredients.map(ingr => (
          <button
            className={s.ingrBtn}
            type="button"
            value={ingr}
            key={ingr}
            onClick={onCancelBnt}
          >
            {ingr}
          </button>
        ))}
      </div>
    )}

    <label>
      Цена (денег):
      <br />
      <input
        name="price"
        type="text"
        onChange={onChange}
        value={price}
        required
      />
    </label>

    <button type="submit">Сохранить</button>
    <button type="button" onClick={onGoBack}>
      Отмена
    </button>
  </form>
);

export default AddMenuItemView;