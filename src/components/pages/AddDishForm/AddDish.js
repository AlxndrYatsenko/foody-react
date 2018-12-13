import React, { Component } from 'react';

import AddDishForm from './AddDishForm';
import * as API from '../../../services/api';

export default class AddOrderForm extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    selectedIngredient: '',
    categories: [],
    allIngredients: [],
    ingredients: [],
  };

  componentDidMount() {
    API.getCategories().then(categories => this.setState({ categories }));
    API.getAllIngredients().then(allIngredients =>
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

    API.addDish({
      name,
      price,
      image,
      description,
      ingredients,
      category,
    }).then(response => {
      if (response.status === 201) {
        this.setState = {
          name: '',
          price: '',
          description: '',
          image: '',
          category: '',
          selectedIngredient: '',
          categories: [],
          allIngredients: [],
          ingredients: [],
        };
        this.handleGoBack();
      }
    });
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCategoryChange = ({ target: { value } }) => {
    this.setState({ category: value });
  };

  handleIngredientsChange = ({ target: { value } }) => {
    this.setState({ selectedIngredient: value });

    this.setState(({ ingredients, selectedIngredient }) => {
      if (!ingredients.includes(selectedIngredient))
        ingredients.push(selectedIngredient);
    });
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.push({
      pathname: '/menu',
    });
  };

  handleCloseBnt = ({ target: { value } }) => {
    const { ingredients } = this.state;
    const filtred =
      ingredients.length === 1 ? [] : ingredients.filter(i => i !== value);
    this.setState({ ingredients: filtred });
  };

  render() {
    return (
      <AddDishForm
        {...this.state}
        onChange={this.handleChange}
        onCategoryChange={this.handleCategoryChange}
        onSubmit={this.handleSubmit}
        onIngredientsChange={this.handleIngredientsChange}
        onGoBack={this.handleGoBack}
        onCloseBnt={this.handleCloseBnt}
      />
    );
  }
}
