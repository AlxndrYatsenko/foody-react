import React from 'react';

import s from './AddMenuItem.module.css';

const AddMenuItemView = ({
  name,
  price,
  image,
  description,
  category,
  allIngredients,
  currentIngredients,
  ingredient,
  categories,
  onSubmit,
  onChangeName,
  onChangeDescription,
  onChangeImage,
  onChangeCategory,
  onChangePrice,
  onAddIngredient,
  onGoBack,
  onCancelBnt,
}) => (
  <form className={s.form} onSubmit={onSubmit}>
    <label>
      Название:
      <input
        name="name"
        type="text"
        onChange={({ target }) => onChangeName(target.value)}
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
        onChange={({ target }) => onChangeDescription(target.value)}
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
        onChange={({ target }) => onChangeImage(target.value)}
        value={image}
        required
      />
    </label>

    <label>
      Категория:
      <br />
      <select
        onChange={({ target }) => onChangeCategory(target.value)}
        value={category}
      >
        <option key="выбрать" disabled label="выбрать" />
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
      <select
        onChange={({ target }) =>
          onAddIngredient(target.value, currentIngredients)
        }
        value={ingredient}
      >
        <option key="выбрать" disabled label="выбрать" />
        {allIngredients.map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </label>

    {currentIngredients.length > 0 && (
      <div className={s.ingredients}>
        {currentIngredients.map(i => (
          <button
            className={s.ingrBtn}
            type="button"
            value={i}
            key={i}
            onClick={onCancelBnt}
          >
            {i}
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
        onChange={({ target }) => onChangePrice(target.value)}
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
