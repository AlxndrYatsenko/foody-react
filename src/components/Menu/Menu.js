import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import DishList from './DishList';
import CategorySelector from './CategotySelektor';
import * as API from '../../services/api';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;
export default class Menu extends Component {
  state = {
    dishes: [],
    categories: [],
  };

  componentDidMount() {
    API.getCategories().then(categories => this.setState({ categories }));
    const category = getCategoryFromProps(this.props);
    // const category = gotCategory === 'all' ? gotCategory : null;

    const { history, location } = this.props;
    if (location.search === '?category=all') {
      // if (!category) {
      return history.replace({
        pathname: location.pathname,
      });
    }
    return API.getMenuItemsWithCategory(category).then(response =>
      this.setState({ dishes: response }),
    );
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      API.getMenuItemsWithCategory(nextCategory).then(response =>
        this.setState({ dishes: response }),
      );
    }
  }

  handleSelectChange = value => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${value}`,
    });
  };

  render() {
    const { categories, dishes } = this.state;
    const { match, location } = this.props;
    const selected = getCategoryFromProps(this.props);

    return (
      <div>
        <Link
          to={{
            pathname: `${match.url}/add`,
            state: { from: location },
          }}
        >
          Добавить элемент меню
        </Link>
        <hr />
        <CategorySelector
          onChange={this.handleSelectChange}
          value={selected}
          categories={categories}
        />
        <hr />
        <DishList dishList={dishes} {...this.props} />
      </div>
    );
  }
}
