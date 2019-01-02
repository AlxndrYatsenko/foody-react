import React, { Component } from 'react';
import CommentView from './CommentView';
import stars from './addition/stars';
import { addCommentToDish } from '../../../../services/api';

const INITIAL_STATE = {
  rating: 1,
  comment: '',
  currentDish: [],
};

export default class Comment extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const { currentDish } = this.props;
    this.addCurrentDishToState(currentDish);
    // this.setState({ currentDish });
  }

  handleTextreaChange = ({ target }) => {
    this.setState({ comment: target.value });
  };

  handleSelectChange = ({ target }) => {
    this.setState({ rating: target.value });
  };

  handleDeleteComment = date => {
    const { currentDish } = this.state;
    currentDish.comments = currentDish.comments.filter(
      c => c.date.toString() !== date,
    );
    addCommentToDish(currentDish).then(response =>
      response.status === 200
        ? this.addCurrentDishToState(response.data)
        : console.log(response.error),
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { currentDish, comment, rating } = this.state;

    if (!comment) return alert('Вы ничего не написали в комментарии!');

    const addComment = () =>
      currentDish.comments.push({
        date: Date.now(),
        comment,
        rating,
      });

    if (!Array.isArray(currentDish.comments)) {
      currentDish.comments = [];
      addComment();
    } else addComment();

    this.reset();

    return addCommentToDish(currentDish).then(response =>
      response.status === 200
        ? this.addCurrentDishToState(response.data)
        : console.log(response.error),
    );
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  addCurrentDishToState(currentDish) {
    this.setState({ currentDish });
  }

  render() {
    const {
      rating,
      comment,
      currentDish: { comments },
    } = this.state;
    return (
      <CommentView
        stars={stars}
        onSubmit={this.handleSubmit}
        onSelectChange={this.handleSelectChange}
        onTextreaChange={this.handleTextreaChange}
        rating={rating}
        comment={comment}
        comments={comments}
        onDeleteComment={this.handleDeleteComment}
      />
    );
  }
}
