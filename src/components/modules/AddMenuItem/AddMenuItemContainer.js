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
    selectedIngredient: '',
    // categories: [],
    // allIngredients: [],
    ingredients: [],
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
    const {
      comments,
      selectedIngredient,
      // categories,
      // allIngredients,
      // ingredients,
    } = this.state;
    return (
      <AddMenuItemView
        comments={comments}
        selectedIngredient={selectedIngredient}
        // categories={categories}
        // allIngredients={allIngredients}
        // ingredients={ingredients}
        {...this.props}
        onIngredientsChange={this.handleIngredientsChange}
        onGoBack={this.handleGoBack}
        onCancelBnt={this.handleCancelBnt}
      />
    );
  }
}

// export default AddMenuItemContainer;

const mapDispatchToProps = {
  // onSubmit: addMenuItemOperations.fetchAddMenuItem,
  onChangeCategory: actions.addMenuItemCategory,
  onChangeName: actions.addMenuItemName,
  onChangeDescription: actions.addMenuItemDescription,
  onChangeImage: actions.addMenuItemImage,
  onChangePrice: actions.addMenuItemPrice,
  fetchCategories: menuOperations.fetchCategories,
  fetchAllIngredients: addMenuItemOperations.fetchAllIngredients,
};

const mapStateToProps = state => ({
  category: state.addMenuItem.category,
  name: state.addMenuItem.name,
  description: state.addMenuItem.description,
  image: state.addMenuItem.image,
  price: state.addMenuItem.price,
  categories: state.menu.categories,
  allIngredients: state.addMenuItem.allIngredients,
  // ingredient: state.addMenuItem.ingredient,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMenuItemContainer);
