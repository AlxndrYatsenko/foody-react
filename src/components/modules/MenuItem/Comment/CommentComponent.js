import React, { Component } from 'react';

import Comment from './Comment';

import stars from './addition/stars';
import * as API from '../../../../services/api';

export default class CommentContainer extends Component {
  state = {
    rating: 0,
    comment: '',
    isOpenComments: false,
    error: '',
  };

  handleTextareaChange = ({ target }) => {
    this.setState({ comment: target.value });
  };

  handleSelectChange = ({ target }) => {
    this.setState({ rating: Number(target.value) });
  };

  reset = () => {
    this.setState({
      rating: 0,
      comment: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { rating, comment } = this.state;

    if (!rating) return alert('Вы не выбрали оценку');
    if (!comment) return alert('Напишите хоть пару буковок :))');

    const { currentItemID } = this.props;

    const newComment = {
      date: new Date().toLocaleDateString('en-US'),
      rating,
      text: comment,
      ItemID: currentItemID,
    };

    return API.addComment(newComment)
      .catch(error => this.setState({ error }))
      .then(this.reset());
  };

  handleToggleShowComments = () => {
    this.setState(state => ({ isOpenComments: !state.isOpenComments }));
  };

  render() {
    const { currentItemID } = this.props;

    return (
      <Comment
        {...this.state}
        stars={stars}
        currentItemID={currentItemID}
        onSubmit={this.handleSubmit}
        onSelectChange={this.handleSelectChange}
        onTextareaChange={this.handleTextareaChange}
        onDeleteComment={this.handleDeleteComment}
        onToggleShowComments={this.handleToggleShowComments}
      />
    );
  }
}
