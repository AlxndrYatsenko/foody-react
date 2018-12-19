import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import DishList from './DishList';
import s from './Menu.module.css';
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

    return API.getMenuItemsWithCategory(category).then(response =>
      this.setState({ dishes: response }),
    );
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;
    API.getMenuItemsWithCategory(nextCategory).then(dishes =>
      this.setState({ dishes }),
    );
  }

  handleClearFilter = () => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
    });
  };

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
    const category = getCategoryFromProps(this.props);

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
        <div>
          <CategorySelector
            onChange={this.handleSelectChange}
            value={category}
            categories={categories}
          />
          {category && (
            <button
              className={s.filterBtn}
              type="button"
              onClick={this.handleClearFilter}
            >
              Очистить фильтр
            </button>
          )}
        </div>
        {category && <p>Текущий фильтр: {category}</p>}

        <hr />
        <DishList dishList={dishes} {...this.props} />
      </div>
    );
  }
}
