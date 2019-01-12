import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import MenuView from './MenuView';
// import { actions } from '../duck';

import { menuActions, menuOperations, menuSelectors } from '../duck';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  componentDidMount() {
    const {
      fetchCategories,
      // fetchMenuItems,
      getCategoryfromLocation,
      fetchMenuItemsWithCategory,
      location,
    } = this.props;

    fetchCategories();

    const { payload } = getCategoryfromLocation(location);
    // console.log(payload);

    return fetchMenuItemsWithCategory(payload);
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
    return <MenuView {...this.props} />;
  }
}

const mapStateToProps = state => ({
  menuItems: menuSelectors.getVisibleMenuItems(state),
  categories: menuSelectors.getCategory(state),
  filter: menuSelectors.getFilter(state),
  category: menuSelectors.getCategory(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  onDeleteItem: menuOperations.deleteMenuItem,
  fetchCategories: menuOperations.fetchCategories,
  onFilterChange: menuActions.changeFilter,
  onChangeCategory: menuActions.changeCategory,
  onResetCategory: menuActions.resetCategory,
  getCategoryfromLocation: menuActions.getCategoryfromLocation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
