import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Ingredients extends Component {
  state = {
    ingredients: [],
    // filter: '',
    selected: '',
    // categories: [],
  };

  componentDidMount() {
    // console.log(this.state);
    // const { selected } = this.state;
    API.getAllIngredients().then(ingredients => this.setState({ ingredients }));
    // if (!selected) return;
    // API.getCategories().then(categories => this.setState({ categories }));

    // console.log(this.state);

    // API.getMenu().then(response => );
  }

  // handleFilterChange = ({ target }) => {
  //   this.setState({ filter: target.value });
  // };

  handleSelectChange = ({ target: { value } }) => {
    this.setState({ selected: value });
  };

  render() {
    const { ingredients, selected } = this.state;
    return (
      <select onChange={this.handleSelectChange} value={selected}>
        <option key="выбрать" selected>
          выбрать
        </option>
        {ingredients.map(ingredient => (
          <option key={ingredient}>{ingredient}</option>
        ))}
      </select>
    );
  }
}
