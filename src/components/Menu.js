import React, { Component } from 'react';
import DishList from './DishList';
import DishFilter from './DishFilter';

const filterDishes = (dishes, filter) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));
export default class Menu extends Component {
  state = {
    dishes: this.props.dishList,
    filter: '',
  };

  handleDeleteDish = id => {
    this.setState(prevState => ({
      dishes: prevState.dishes.filter(dish => dish.id !== id),
    }));
  };

  handleFilterChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const { dishes, filter } = this.state;
    const filteredDishes = filterDishes(dishes, filter);
    return (
      <div>
        <DishFilter value={filter} onFilterChange={this.handleFilterChange} />
        <DishList
          onDeleteDish={this.handleDeleteDish}
          dishList={filteredDishes}
        />
      </div>
    );
  }
}
