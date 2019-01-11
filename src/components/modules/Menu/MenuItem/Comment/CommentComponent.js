import React, { Component } from 'react';
// import { connect } from 'react-redux';

import CommentView from './CommentView';

// import * as menuItemSelectors from '../duck/menuItemSelectors';
import stars from './addition/stars';
// import * as API from '../../../../../services/api';

const INITIAL_STATE = {
  rating: 1,
  currentComment: '',
  // comments: [],
  isOpenComments: false,
};
export default class CommentContainer extends Component {
  state = {
    ...INITIAL_STATE,
  };

  // componentDidMount() {
  //   const { currentItemID } = this.props;
  //   // console.log(currentItemID);
  //   // if (currentItemID)
  //   API.getCommentsWithItemID(currentItemID).then(data =>
  //     this.setState({ comments: data }),
  //   );
  //   // .then(data => console.log(data));
  //   // console.log(comments);
  //   // comments && this.addCommentsToState(comments);
  //   // this.setState({ currentDish });
  // }

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
    // const { currentItem } = this.props;

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
    // console.log(currentItem);
    // return addCommentToDish(currentDish).then(response =>
    //   response.status === 200
    //     ? this.addCurrentDishToState(response.data)
    //     : console.log(response.error),
    // );
  };

  handleToggleComments = () => {
    this.setState(state => ({ isOpenComments: !state.isOpenComments }));
  };

  // handleClaseComments = () => {
  //   this.setState({ isOpenComments: false });
  // };

  addCommentsToState(comments) {
    this.setState({ comments });
  }

  render() {
    const { rating, comment, comments, isOpenComments } = this.state;
    // console.log(comments);
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
        isOpenComments={isOpenComments}
        onToggleComments={this.handleToggleComments}
        // onCloseComments={this.handleCloseComments}
      />
    );
  }
}

// const mstp = state => ({
//   currentID: menuItemSelectors.getCurrentItemID(state),
// });

// export default connect(
//   mstp,
//   null,
// )(CommentContainer);
