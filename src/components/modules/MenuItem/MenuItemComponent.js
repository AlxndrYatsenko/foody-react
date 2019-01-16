import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

import menuItemSelectors from './duck/menuItemSelectors';
import { menuItemOperations } from './duck';

class MenuItemComponent extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const { fetchMenuItem } = this.props;
    fetchMenuItem(params.id);
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    const {
      currentItem: { category },
    } = this.props;

    return location.state
      ? history.push(location.state.from)
      : history.push({
          pathname: '/menu',
          search: `?category=${category}`,
        });
  };

  render() {
    return <MenuItem {...this.props} goBack={this.handleGoBack} />;
  }
}

const mtsp = state => ({
  currentItem: menuItemSelectors.getCurrentItem(state),
});
const mtdp = {
  fetchMenuItem: menuItemOperations.fetchMenuItem,
};

export default connect(
  mtsp,
  mtdp,
)(MenuItemComponent);
