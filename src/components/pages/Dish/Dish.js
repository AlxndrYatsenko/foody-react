import React, { PureComponent } from 'react';
import DishItem from './DishItem';
import s from '../../Menu/Menu.module.css';
import Spiner from '../../Spiner/Spiner';
import { getMenuItemById } from '../../../services/api';

export default class Dish extends PureComponent {
  state = {
    isLoading: false,
    currentDish: {},
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    const {
      match: { params },
    } = this.props;

    getMenuItemById(params.id).then(({ data }) =>
      this.setState({
        currentDish: data,
        isLoading: false,
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
    const { isLoading, currentDish } = this.state;

    return (
      <>
        <button
          className={s.goBackBtn}
          onClick={this.handleGoBack}
          type="button"
        >
          Назад к меню
        </button>
        <hr />
        {isLoading ? (
          <Spiner />
        ) : (
          <DishItem currentDish={currentDish} {...this.props} />
        )}
      </>
    );
  }
}
