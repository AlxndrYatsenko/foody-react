import React, { Component } from 'react';
import { connect } from 'react-redux';
// import queryString from 'query-string';

import MenuView from './MenuView';
import actions from './duck/menuActions';

import { menuOperations, menuSelectors } from './duck/index';

class MenuContainer extends Component {
  componentDidMount() {
    const { fetchCategories, fetchMenuItems } = this.props;

    fetchCategories();

    return fetchMenuItems();
  }

  render() {
    return <MenuView {...this.props} />;
  }
}

const mapStateToProps = state => ({
  menuItems: menuSelectors.getVisibleMenuItems(state),
  categories: state.menu.categories,
  filter: menuSelectors.getFilter(state),
  category: state.menu.category,
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  fetchCategories: menuOperations.fetchCategories,
  onFilterChange: actions.changeFilter,
  onChangeCategory: menuOperations.changeCategory,
  onResetCategory: actions.resetMenuCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
