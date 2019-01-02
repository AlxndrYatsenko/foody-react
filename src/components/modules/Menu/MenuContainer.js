import React, { Component } from 'react';
import { connect } from 'react-redux';
// import queryString from 'query-string';

import MenuView from './MenuView';
import actions from './menuActions';

import { menuOperations, menuSelectors } from './index';

// const getCategoryFromProps = props =>
//   queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    // const category = getCategoryFromProps(this.props);
    // this.props.fetchMenuItems().then(r => console.log(r));
    const { category } = this.props;
    console.log(category);
    return this.props.fetchMenuItems();
  }

  // componentDidUpdate(prevProps) {
  //   const prevCategory = getCategoryFromProps(prevProps);
  //   const nextCategory = getCategoryFromProps(this.props);

  //   if (prevCategory !== nextCategory) {
  //     // API.getMenuItemsWithCategory(nextCategory).then(response =>
  //     //   this.setState({ dishes: response }),
  //     // );
  //   }
  // }

  // handleSelectClear = () => {
  //   const { history, location } = this.props;
  //   history.push({
  //     pathname: location.pathname,
  //   });
  // };

  handleSelectChange = value => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${value}`,
    });
    this.props.fetchMenuItemsByCategory(value);
  };

  // handleFilterChange = ({ target }) => {
  //   this.setState({ filter: target.value });
  // };

  render() {
    // const { categories, dishes, filter } = this.state;
    // const category = getCategoryFromProps(this.props);
    // const filteredDishes = filterDishes(dishes, filter);

    return (
      <MenuView
        // category={category}
        {...this.props}
        // onSelectChange={this.handleSelectChange}
        onSelectClear={this.handleSelectClear}
        // filter={filter}
        // onFilterChange={changeFilter}
      />
    );
  }
}

const mapStateToProps = state =>
  // console.log(state);
  ({
    // menuItems: state.menu.items,
    menuItems: menuSelectors.getVisibleMenuItems(state),
    categories: state.menu.categories,
    cetegory: state.menu.category,
    filter: menuSelectors.getFilter(state),
  });
const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchCategories: menuOperations.fetchCategories,
  onFilterChange: actions.changeFilter,
  onCategoryChange: actions.changeCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
