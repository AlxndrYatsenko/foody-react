import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from './duck/addMenuItemActions';
import AddMenuItemView from './AddMenuItemView';
import addMenuItemOperations from './duck/addMenuItemOperations';
import { menuOperations } from '../Menu/duck';

import * as API from '../../../services/api';

class AddMenuItemContainer extends Component {
  state = {
    comments: [],
  };

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
    const { comments } = this.state;
    return (
      <AddMenuItemView
        comments={comments}
        {...this.props}
        onGoBack={this.handleGoBack}
        onCancelBnt={this.handleCancelBnt}
      />
    );
  }
}

const mapDispatchToProps = {
  // onSubmit: addMenuItemOperations.fetchAddMenuItem,
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
  name: state.addMenuItem.name,
  image: state.addMenuItem.image,
  price: state.addMenuItem.price,
  category: state.addMenuItem.category,
  ingredient: state.addMenuItem.ingredient,
  currentIngredients: state.addMenuItem.currentIngredients,
  description: state.addMenuItem.description,
  categories: state.menu.categories,
  allIngredients: state.addMenuItem.allIngredients,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMenuItemContainer);
