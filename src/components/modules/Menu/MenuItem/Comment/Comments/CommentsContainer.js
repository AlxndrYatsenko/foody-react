import React, { Component } from 'react';

import { connect } from 'react-redux';

import Comments from './Comments';

import * as menuItemSelectors from '../../duck/menuItemSelectors';
import * as API from '../../../../../../services/api';

class CommentsContainer extends Component {
  state = { comments: [] };

  componentDidMount() {
    const { currentItemID } = this.props;

    API.getCommentsWithItemID(currentItemID).then(data =>
      this.setState({ comments: data }),
    );
  }

  render() {
    const { comments } = this.state;
    return <Comments comments={comments} />;
  }
}

const mstp = state => ({
  currentItemID: menuItemSelectors.getCurrentItemID(state),
});

export default connect(
  mstp,
  null,
)(CommentsContainer);
