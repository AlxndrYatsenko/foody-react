import React, { PureComponent } from 'react';
import s from './Menu.module.css';
import DishItem from './DishItem';
import Spiner from '../Spiner/Spiner';
import { getMenuItemById } from '../../services/api';

export default class Dish extends PureComponent {
  state = {
    isLoading: false,
    currentDish: {},
    error: '',
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    const {
      match: { params },
    } = this.props;

    getMenuItemById(params.id)
      .then(({ status, data, error }) =>
        status === 200
          ? this.setState({
              currentDish: data,
              isLoading: false,
            })
          : this.setState({ error }),
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleGoBack = () => {
    const {
      history,
      location: { state },
    } = this.props;

    const {
      currentDish: { category },
    } = this.state;

    return state
      ? history.push(state.from)
      : history.push({
          pathname: '/menu',
          search: `?category=${category}`,
        });
  };

  render() {
    const { isLoading, currentDish, error } = this.state;

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
        {error && <p>{error.message}</p>}
        {isLoading ? (
          <Spiner />
        ) : (
          <DishItem currentDish={currentDish} {...this.props} />
        )}
      </>
    );
  }
}
