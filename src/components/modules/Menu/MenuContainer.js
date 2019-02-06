import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Menu from './Menu';

import { menuActions, menuOperations, menuSelectors } from './duck';
import { cartActions } from '../Cart/duck';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

const initialState = { category: '' };
class MenuContainer extends Component {
  state = { ...initialState };

  componentDidMount() {
    const category = getCategoryFromProps(this.props);
    this.setState({ category });
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

  handlechangeCategory = category => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });

    return category;
  };

  resetCategory = () => {
    // this.setState({ ...initialState });
    const { history } = this.props;

    history.push({
      pathname: '/menu',
    });
  };

  render() {
    return (
      <Menu
        {...this.props}
        {...this.state}
        onChangeCategory={this.handlechangeCategory}
        onResetCategory={this.resetCategory}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  categories: menuSelectors.getCategories(state),
  filter: menuSelectors.getFilter(state),
  menuItems: menuSelectors.getVisibleMenuItems(state, props),
});

const mapDispatchToProps = {
  addToCart: cartActions.addToCart,
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuItemsWithCategory: menuOperations.fetchMenuItemsWithCategory,
  fetchCategories: menuOperations.fetchCategories,
  onFilterChange: menuActions.changeFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
