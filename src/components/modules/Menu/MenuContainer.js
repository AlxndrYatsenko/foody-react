import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Menu from './Menu';
// import { actions } from '../duck';

import { menuActions, menuOperations, menuSelectors } from './duck';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  componentDidMount() {
    const {
      fetchMenuItems,
      fetchCategories,
      // getCategoryfromLocation,
      // fetchMenuItemsWithCategory,
      // location,
    } = this.props;

    fetchCategories();
    // console.log(fetchCategories());

    // const { payload } = getCategoryfromLocation(location);
    // console.log(fetchMenuItemsWithCategory(payload));

    // fetchMenuItemsWithCategory(payload);
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

  render() {
    return <Menu {...this.props} />;
    // return null;
  }
}

const mapStateToProps = state => ({
  categories: menuSelectors.getCategories(state),
  filter: menuSelectors.getFilter(state),
  category: menuSelectors.getCategory(state),
  // menuItems: menuSelectors.getSelectedItemsWithCategory(state),
  menuItems: menuSelectors.getVisibleMenuItems(state),
  // qwe: menuSelectors.getAllComments(state),
});

const mapDispatchToProps = {
  selectItem: menuActions.selectItem,
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  // onDeleteItem: menuOperations.deleteMenuItem,
  fetchCategories: menuOperations.fetchCategories,
  onFilterChange: menuActions.changeFilter,
  onChangeCategory: menuActions.changeCategory,
  onResetCategory: menuActions.resetCategory,
  getCategoryfromLocation: menuActions.getCategoryfromLocation,
  // getSelectedItemsWithCategory: menuActions.getSelectedItemsWithCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
