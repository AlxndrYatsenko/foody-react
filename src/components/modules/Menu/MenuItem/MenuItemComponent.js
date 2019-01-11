import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItemView from './MenuItemView';

import * as menuItemSelectors from './duck/menuItemSelectors';
import { menuItemOperations } from './duck';

// import { getMenuItemById } from '../../../../services/api';

class MenuItemComponent extends Component {
  // state = {
  //   isOpenComments: false,
  // };

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
    return <MenuItemView {...this.props} goBack={this.handleGoBack} />;
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
