import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import s from './DishList.module.css';
import * as API from '../../services/api';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;
export default class DishList extends Component {
  state = {
    // category: '',
  };

  componentDidMount() {
    // console.log(this.props);
    // const category = getCategoryFromProps(this.props);
    // const { history, location } = this.props;
    //
    // const { onAddDishes } = this.props;
    // API.getMenuItemsWithCategory(category).then(
    // dishes => onAddDishes(dishes),
    // articles => console.log(articles),
    // this.setState({ articles }),
    // );
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);
    if (prevCategory !== nextCategory) {
      API.getMenuItemsWithCategory(nextCategory);
    }
  }

  render() {
    const { dishList, match, location } = this.props;

    return (
      <ul className="menu-list">
        {dishList.map(({ id, name, image, price }) => (
          <li className={s.list} key={id}>
            <Link
              to={{
                pathname: `${match.url}/${id}`,
                state: { from: location },
              }}
            >
              <img className={s.img} src={image} alt={name} />
              <p className={s.name}>{name}</p>
              <p className={s.price}>Цена: {price} денег</p>
            </Link>
          </li>
        ))}
        <hr />
      </ul>
    );
  }
}
