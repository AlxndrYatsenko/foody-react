import React, { Component } from 'react';

import { connect } from 'react-redux';

import Comments from './Comments';

import * as menuItemSelectors from '../../duck/menuItemSelectors';
import * as API from '../../../../../../services/api';

class CommentsContainer extends Component {
  state = { comments: [] };

  componentDidMount() {
    const { currentItemID } = this.props;

    API.getCommentsWithItemID(currentItemID).then(comments =>
      this.setState({ comments }),
    );
  }

  handleDeleteComment = id => {
    API.deleteCommentWithID(id).then(response => {
      if (response === 200)
        this.setState(state => ({
          comments: state.comments.filter(comment => {
            console.log(id);
            console.log(comment.id);
            return comment.id !== Number(id);
          }),
        }));
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <Comments
        comments={comments}
        onDeleteComment={this.handleDeleteComment}
      />
    );
  }
}

const mstp = state => ({
  currentItemID: menuItemSelectors.getCurrentItemID(state),
});

export default connect(mstp)(CommentsContainer);
