import React, { Component } from 'react';

import { connect } from 'react-redux';
import AddMenuItemView from './AddMenuItemView';

import menuOperations from './duck/addMenuItemOperations';

import * as API from '../../../../services/api';

class AddMenuItemContainer extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    selectedIngredient: '',
    ingredients: [],
    categories: [],
    allIngredients: [],
    error: '',
  };

  componentDidMount() {
    API.getCategories()
      .catch(error => this.setState({ error }))
      .then(categories => this.setState({ categories }));

    API.getAllIngredients()
      .catch(error => this.setState({ error }))
      .then(allIngredients => this.setState({ allIngredients }));
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleChangeIngredients = ({ target: { value } }) => {
    this.setState({ selectedIngredient: value });

    this.setState(({ ingredients, selectedIngredient }) => {
      if (!ingredients.includes(selectedIngredient))
        ingredients.push(selectedIngredient);
    });
  };

  handleGoBack = () => {
    const { location, history } = this.props;

    const pathname = location.state ? location.state.from.pathname : '/menu';
    const search = location.state ? location.state.from.search : '';

    history.push({ pathname, search });
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
        onChangeCategory={this.handleChangeCategory}
        onChangeIngredients={this.handleChangeIngredients}
        onGoBack={this.handleGoBack}
        onCancelBnt={this.handleCancelBnt}
      />
    );
  }
}

const mdtp = { onSubmit: menuOperations.addMenuItem };

export default connect(
  null,
  mdtp,
)(AddMenuItemContainer);
