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

  render() {
    return <Menu {...this.props} />;
  }
}

const mapStateToProps = state => ({
  categories: menuSelectors.getCategories(state),
  filter: menuSelectors.getFilter(state),
  category: menuSelectors.getCategory(state),
  menuItems: menuSelectors.getVisibleMenuItems(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
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
