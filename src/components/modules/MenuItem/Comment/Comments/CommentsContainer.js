import React, { Component } from 'react';

import { connect } from 'react-redux';

import Comments from './Comments';

import * as menuItemSelectors from '../../duck/menuItemSelectors';
import * as API from '../../../../../services/api';

class CommentsContainer extends Component {
  state = { comments: [], error: '' };

  componentDidMount() {
    const { currentItemID } = this.props;

    API.getCommentsWithItemID(currentItemID)
      .catch(error => this.setState({ error }))
      .then(comments => this.setState({ comments }));
  }

  handleDeleteComment = id => {
    API.deleteCommentWithID(id)
      .catch(error => this.setState({ error }))
      .then(() => {
        this.setState(state => ({
          comments: state.comments.filter(comment => comment.id !== Number(id)),
        }));
      });
  };

  render() {
    return (
      <Comments {...this.state} onDeleteComment={this.handleDeleteComment} />
    );
  }
}

const mstp = state => ({
  currentItemID: menuItemSelectors.getCurrentItemID(state),
});

export default connect(mstp)(CommentsContainer);
