import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import MenuView from './MenuView';
import actions from './duck/menuActions';

import { menuOperations, menuSelectors } from './duck';

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
    // const { fetchMenuItemsWithCategory } = this.props;
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    // console.log(prevCategory);
    // console.log(nextCategory);

    // const category = getCategoryFromProps(this.props);

    const { fetchMenuItemsWithCategory } = this.props;
    if (prevCategory !== nextCategory) {
      // console.log(getMenuItemsWithCategory(nextCategory));
      fetchMenuItemsWithCategory(nextCategory);
    }
  }

  render() {
    // console.log('render');
    return <MenuView {...this.props} />;
  }
}

const mapStateToProps = state => ({
  menuItems: menuSelectors.getVisibleMenuItems(state),
  categories: state.menu.categories,
  filter: menuSelectors.getFilter(state),
  category: menuSelectors.getCategory(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  onDeleteItem: menuOperations.deleteMenuItem,
  fetchCategories: menuOperations.fetchCategories,
  onFilterChange: actions.changeFilter,
  onChangeCategory: actions.changeCategory,
  onResetCategory: actions.resetCategory,
  getCategoryfromLocation: actions.getCategoryfromLocation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
