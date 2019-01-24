import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Menu from './Menu';

import { menuActions, menuOperations, menuSelectors } from './duck';
import { cartActions } from '../Cart/duck';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  componentDidMount() {
    const { fetchMenuItems, fetchCategories } = this.props;

    fetchCategories();
    return fetchMenuItems();
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    const { fetchMenuItemsWithCategory } = this.props;
    if (prevCategory !== nextCategory) {
      fetchMenuItemsWithCategory(nextCategory);
    }
  }

  handlechangeCategory = (category, history, location) => {
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });

    return category;
  };

  render() {
    return (
      <Menu {...this.props} onChangeCategory={this.handlechangeCategory} />
    );
  }
}

const mapStateToProps = (state, props) => ({
  categories: menuSelectors.getCategories(state),
  filter: menuSelectors.getFilter(state),
  category: menuSelectors.getCategory(props),
  menuItems: menuSelectors.getVisibleMenuItems(state, props),
});

const mapDispatchToProps = {
  addToCart: cartActions.addToCart,
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  fetchCategories: menuOperations.fetchCategories,
  onFilterChange: menuActions.changeFilter,
  onChangeCategory: menuActions.changeCategory,
  onResetCategory: menuActions.resetCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
