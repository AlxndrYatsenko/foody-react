import React, { Component } from 'react';
import CommentView from './CommentView';
import stars from './addition/stars';
// import { addCommentToDish } from '../../../../../services/api';

const INITIAL_STATE = {
  rating: 1,
  currentComment: '',
  comments: [],
};

export default class Comment extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const { comments } = this.props;
    console.log(comments);
    // comments && this.addCommentsToState(comments);

    // this.setState({ currentDish });
  }

  handleTextareaChange = ({ target }) => {
    this.setState({ comment: target.value });
  };

  handleSelectChange = ({ target }) => {
    this.setState({ rating: target.value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  // handleDeleteComment = date => {
  //   const { currentDish } = this.state;
  //   currentDish.comments = currentDish.comments.filter(
  //     c => c.date.toString() !== date,
  //   );
  //   addCommentToDish(currentDish).then(response =>
  //     response.status === 200
  //       ? this.addCurrentDishToState(response.data)
  //       : console.log(response.error),
  //   );
  // };

  handleSubmit = e => {
    e.preventDefault();
    // const { currentDish, currentComment, rating } = this.state;
    const { currentItem } = this.props;

    // if (!comment) return alert('Вы ничего не написали в комментарии!');

    // const addComment = () =>
    //   currentDish.comments.push({
    //     date: Date.now(),
    //     currentComment,
    //     rating,
    //   });

    // if (!Array.isArray(currentDish.comments)) {
    //   currentDish.comments = [];
    //   addComment();
    // } else addComment();

    // this.reset();
    console.log(currentItem);
    // return addCommentToDish(currentDish).then(response =>
    //   response.status === 200
    //     ? this.addCurrentDishToState(response.data)
    //     : console.log(response.error),
    // );
  };

  addCommentsToState(comments) {
    this.setState({ comments });
  }

  render() {
    const { rating, comment, comments } = this.state;
    return (
      <CommentView
        stars={stars}
        onSubmit={this.handleSubmit}
        onSelectChange={this.handleSelectChange}
        onTextareaChange={this.handleTextareaChange}
        rating={rating}
        comment={comment}
        comments={comments}
        onDeleteComment={this.handleDeleteComment}
      />
    );
  }
}
