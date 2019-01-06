import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from './duck/addMenuItemActions';
import AddMenuItemView from './AddMenuItemView';
import addMenuItemOperations from './duck/addMenuItemOperations';
import { menuOperations } from '../Menu/duck';

import * as API from '../../../services/api';

class AddMenuItemContainer extends Component {
  componentDidMount() {
    const { fetchCategories, fetchAllIngredients } = this.props;
    fetchCategories();
    fetchAllIngredients();
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

    API.addItem({
      name,
      price,
      image,
      description,
      ingredients,
      category,
    }).then(() => {
      this.handleGoBack();
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
        {...this.props}
        onSubmit={this.handleSubmit}
        onCancelBnt={this.handleCancelBnt}
      />
    );
  }
}

const mapDispatchToProps = {
  // onSubmit: addMenuItemOperations.fetchAddMenuItem,
  // rename all
  onGoBack: addMenuItemOperations.addMenuItemGoBack,
  onChangeCategory: actions.addMenuItemCategory,
  onChangeName: actions.addMenuItemName,
  onChangeDescription: actions.addMenuItemDescription,
  onChangeImage: actions.addMenuItemImage,
  onChangePrice: actions.addMenuItemPrice,
  onAddIngredient: addMenuItemOperations.addCurrentIngredients,
  fetchCategories: menuOperations.fetchCategories,
  fetchAllIngredients: addMenuItemOperations.fetchAllIngredients,
};

const mapStateToProps = state => ({
  newItem: {
    name: state.addMenuItem.name,
    image: state.addMenuItem.image,
    price: state.addMenuItem.price,
    category: state.addMenuItem.category,
    description: state.addMenuItem.description,
    currentIngredients: state.addMenuItem.currentIngredients,
  },
  ingredient: state.addMenuItem.ingredient,
  categories: state.menu.categories,
  allIngredients: state.addMenuItem.allIngredients,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMenuItemContainer);
