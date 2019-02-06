import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import s from './ItemList.module.css';

export default class ItemList extends Component {
  componentDidMount() {}

  render() {
    const { menuItems, match, location, addToCart } = this.props;
    return (
      <ul className={s.list}>
        {menuItems.map(({ id, name, image, price }) => (
          <li className={s.item} key={id}>
            <div className={s.wrapper}>
              <Link
                className={s.itemLink}
                to={{
                  pathname: `${match.url}/${id}`,
                  state: { from: location },
                }}
              >
                <div className={s.info}>
                  <img className={s.img} src={image} alt={name} />
                  <p className={s.name}>{name}</p>
                  <p className={s.price}>Цена: {price} денег</p>
                </div>
              </Link>
              <button
                className={s.addToCartBtn}
                type="button"
                onClick={() => addToCart(id)}
              >
                В корзину
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
