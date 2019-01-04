import React, { Component } from 'react';
import { connect } from 'react-redux';
// import queryString from 'query-string';

import MenuView from './MenuView';
import actions from './duck/menuActions';

import { menuOperations, menuSelectors } from './duck/index';

// const getCategoryFromProps = props =>
//   queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  componentDidMount() {
    const { fetchCategories, fetchMenuItems } = this.props;

    fetchCategories();

    return fetchMenuItems();
  }

  // componentDidUpdate(prevProps) {
  //   const prevCategory = getCategoryFromProps(prevProps);
  //   const nextCategory = getCategoryFromProps(this.props);

  //   console.log('prevCategory: ', prevCategory);
  //   console.log('nextCategory: ', nextCategory);
  //   if (prevCategory !== nextCategory) {
  //     const {
  //       fetchMenuItemsWithCategory,
  //       //       //       //   menuItems,
  //       //       onChangeCategory,
  //       //       history,
  //       //       location,
  //     } = this.props;
  //     //     //     // console.log(menuItems);
  //     fetchMenuItemsWithCategory(nextCategory);
  //     //     onChangeCategory(nextCategory, history, location);
  //     //     // actions.changeMenuCategory(nextCategory);
  //   }
  // }

  // handleSelectClear = () => {
  //   const { history, location } = this.props;
  //   history.push({
  //     pathname: location.pathname,
  //   });
  // };

  // handleSelectChange = value => {
  //   const { history, location } = this.props;
  //   history.push({
  //     pathname: location.pathname,
  //     search: `category=${value}`,
  //   });
  //   this.props.fetchMenuItemsByCategory(value);
  // };

  // handleFilterChange = ({ target }) => {
  //   this.setState({ filter: target.value });
  // };

  render() {
    // const { categories, dishes, filter } = this.state;
    // const category = getCategoryFromProps(this.props);
    // const filteredDishes = filterDishes(dishes, filter);
    // console.log('render');

    return (
      <MenuView
        {...this.props}
        // onSelectChange={this.handleSelectChange}
        // onSelectClear={this.handleSelectClear}
      />
    );
  }
}

const mapStateToProps = state => ({
  menuItems: menuSelectors.getVisibleMenuItems(state),
  categories: state.menu.categories,
  filter: menuSelectors.getFilter(state),
  // cetegory: menuSelectors.getCategory(state),
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
