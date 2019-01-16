import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import s from '../../Menu.module.css';

export default class ItemList extends Component {
  componentDidMount() {}

  render() {
    const {
      menuItems,
      selectItem,
      // onDeleteItem,
      match,
      location,
    } = this.props;
    return (
      <ul className={s.list}>
        {menuItems.map(({ id, name, image, price }) => (
          <li className={s.item} key={id}>
            <Link
              to={{
                pathname: `${match.url}/${id}`,
                state: { from: location },
              }}
              onClick={() => selectItem(id)}
            >
              <div className={s.wrapper}>
                {/* test#2 */}
                {/* </Link> */}
                <div className={s.info}>
                  <img className={s.img} src={image} alt={name} />
                  <p className={s.name}>{name}</p>
                  <p className={s.price}>Цена: {price} денег</p>
                </div>
                {/* <button
            className={s.deleteBtn}
            type="button"
            onClick={() => onDeleteItem(id)}
						>
            удалить
          </button> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
