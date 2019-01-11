import React, { Component } from 'react';
// import { connect } from 'react-redux';

import CommentView from './CommentView';

// import * as menuItemSelectors from '../duck/menuItemSelectors';
import stars from './addition/stars';
import * as API from '../../../../../services/api';

// const INITIAL_STATE = {
//   rating: 1,
//   comment: '',
//   isOpenComments: false,
// };
export default class CommentContainer extends Component {
  state = {
    rating: 1,
    comment: '',
    isOpenComments: false,
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
    this.setState({ rating: Number(target.value) });
  };

  reset = () => {
    this.setState({
      rating: 1,
      comment: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { currentItemID } = this.props;
    const { rating, comment } = this.state;

    const newComment = {
      date: new Date().toLocaleDateString('en-US'),
      rating,
      text: comment,
      ItemID: currentItemID,
    };

    API.addComment(newComment)
      .then(this.reset())
      .catch(error => console.log(error));
  };

  handleToggleComments = () => {
    this.setState(state => ({ isOpenComments: !state.isOpenComments }));
  };

  addCommentsToState(comments) {
    this.setState({ comments });
  }

  render() {
    const { rating, comment, comments, isOpenComments } = this.state;
    const { currentItemID } = this.props;
    return (
      <CommentView
        isOpenComments={isOpenComments}
        stars={stars}
        rating={rating}
        comment={comment}
        comments={comments}
        currentItemID={currentItemID}
        onSubmit={this.handleSubmit}
        onSelectChange={this.handleSelectChange}
        onTextareaChange={this.handleTextareaChange}
        onDeleteComment={this.handleDeleteComment}
        onToggleComments={this.handleToggleComments}
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
