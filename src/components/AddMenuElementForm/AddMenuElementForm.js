import React, { Component } from 'react';
import s from './AddMenuElementForm.module.css';
import { getCategories, addDish, getAllIngredients } from '../../services/api';
// import API from '../../services/api';

const INNITIAL_STATE = {
  name: '',
  price: '',
  description: '',
  image: '',
  category: '',
  categories: [],
  allIngredients: [],
  ingredients: [],
  selectedIngredient: '',
};

export default class AddOrderForm extends Component {
  state = { ...INNITIAL_STATE };

  componentDidMount() {
    getCategories().then(categories => this.setState({ categories }));
    getAllIngredients().then(allIngredients =>
      this.setState({ allIngredients }),
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      price,
      image,
      description,
      ingredients,
      category,
    } = this.state;

    addDish({
      name,
      price,
      image,
      description,
      ingredients,
      category,
    }).then(response => {
      if (response.status === 201) this.handleGoBack();
    });
  };

  handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    const { name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSelectCategoryChange = ({ target: { value } }) => {
    this.setState({ category: value });
  };

  handleSelectIngredientsChange = ({ target: { value } }) => {
    this.setState({ selectedIngredient: value });
    this.setState(state => {
      state.ingredients.push(state.selectedIngredient);
    });
  };

  handleGoBack = () => {
    const {
      history,
      // , location
    } = this.props;
    history.push({
      pathname: '/menu',
      // state: { from: location },
    });
  };

  handleCloseBnt = ({ target }) => {
    const { ingredients } = this.state;
    const filtred = ingredients.filter(el => el === target.value);
    this.setState({ ingredients: filtred });
  };

  render() {
    const {
      name,
      price,
      image,
      description,
      allIngredients,
      ingredients,
      selectedIngredient,
      categories,
      category,
    } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Название:
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={name}
            required
          />
        </label>
        <label>
          Описание:
          <textarea
            name="description"
            type="text"
            onChange={this.handleChange}
            value={description}
            rows="3"
            required
          />
        </label>
        <label>
          URL изображения:
          <input
            name="image"
            type="text"
            onChange={this.handleChange}
            value={image}
            required
          />
        </label>
        <label>
          Категория:
          <select onChange={this.handleSelectCategoryChange} value={category}>
            <option key="выбрать">выбрать</option>
            {categories.map(o => (
              <option key={o.id} value={o.name}>
                {o.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Цена (денег):
          <input
            name="price"
            type="text"
            onChange={this.handleChange}
            value={price}
            required
          />
        </label>

        <label>
          Ингридиенты:
          <select
            onChange={this.handleSelectIngredientsChange}
            value={selectedIngredient}
          >
            <option key="выбрать">выбрать</option>
            {allIngredients.map(ingr => (
              <option key={ingr} value={ingr}>
                {ingr}
              </option>
            ))}
          </select>
        </label>
        <div>
          {ingredients.map(ingr => (
            <button
              className={s.ingrBtn}
              type="button"
              value={ingr}
              key={ingr}
              onClick={this.handleCloseBnt}
            >
              {ingr}
            </button>
          ))}
        </div>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={this.handleGoBack}>
          Отмена
        </button>
      </form>
    );
  }
}
