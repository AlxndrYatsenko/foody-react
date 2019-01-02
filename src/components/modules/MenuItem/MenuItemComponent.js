import React, { Component } from 'react';
import MenuItemView from './MenuItemView';
import s from './MenuItem.module.css';
import { getMenuItemById } from '../../../services/api';

export default class MenuItemComponent extends Component {
  state = {
    currentDish: {},
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    getMenuItemById(params.id).then(({ data }) =>
      this.setState({
        currentDish: data,
      }),
    );
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    const {
      currentDish: { category },
    } = this.state;

    return location.state
      ? history.push(location.state.from)
      : history.push({
          pathname: '/menu',
          search: `?category=${category}`,
        });
  };

  render() {
    const { currentDish } = this.state;

    return (
      <>
        <button
          className={s.goBackBtn}
          onClick={this.handleGoBack}
          type="button"
        >
          Назад к меню
        </button>
        <MenuItemView currentDish={currentDish} {...this.props} />
      </>
    );
  }
}
