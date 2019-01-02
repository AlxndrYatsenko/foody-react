import React, { Component } from 'react';

import AddMenuItemView from './AddMenuItemView';

import * as API from '../../../services/api';

class AddMenuItemContainer extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    comments: [],
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
    console.log(this.props);
    e.preventDefault();
    const {
      name,
      price,
      image,
      description,
      ingredients,
      category,
      comments,
    } = this.state;

    API.addItem({
      name,
      price,
      image,
      description,
      ingredients,
      category,
      comments,
    }).then(() => {
      this.handleGoBack();
    });
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(e.target);
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
    const {
      location: {
        state: {
          from: { pathname, search },
        },
      },
      history,
    } = this.props;

    history.push({
      pathname,
      search,
    });
  };

  handleCancelBnt = ({ target: { value } }) => {
    const { ingredients } = this.state;
    const filtred =
      ingredients.length === 1 ? [] : ingredients.filter(i => i !== value);
    this.setState({ ingredients: filtred });
  };

  render() {
    return (
      <AddMenuItemView
        {...this.state}
        {...this.props}
        onChange={this.handleChange}
        onCategoryChange={this.handleCategoryChange}
        onSubmit={this.handleSubmit}
        onIngredientsChange={this.handleIngredientsChange}
        onGoBack={this.handleGoBack}
        onCancelBnt={this.handleCancelBnt}
      />
    );
  }
}

export default AddMenuItemContainer;
