import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import s from './DishList.module.css';
import * as API from '../../services/api';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;
export default class DishList extends Component {
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
      <ul className={s.list}>
        {dishList.map(({ id, name, image, price }) => (
          <li className={s.item} key={id}>
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
