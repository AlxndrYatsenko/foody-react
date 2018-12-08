import React, { Component } from 'react';
import arrStars from '../services/starsOfDish';

const INITIAL_STATE = {
  selected: 1,
  newDescription: '',
};

export default class Comment extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleTextreaChange = ({ target }) => {
    this.setState({ newDescription: target.value });
  };

  handleSelectChange = ({ target }) => {
    this.setState({ selected: Math.round(target.value) });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const option = arrStars.map(star => (
      <option key={star} value={star}>
        {star}
      </option>
    ));

    const {
      dish: { name, description, image },
    } = this.props;

    const { selected, newDescription } = this.state;

    return (
      <form>
        <img src={image} alt={name} width="200px" height="auto" />
        <p>Name:</p>
        <p>{name}</p>
        <p>Description:</p>
        <p>{description}</p>
        <textarea
          onChange={this.handleTextreaChange}
          rows="4"
          cols="100"
          value={newDescription}
        />
        <select onChange={this.handleSelectChange} value={selected}>
          {option}
        </select>
        <button type="submit" onClick={this.handleFormSubmit}>
          Сохранить
        </button>
      </form>
    );
  }
}
