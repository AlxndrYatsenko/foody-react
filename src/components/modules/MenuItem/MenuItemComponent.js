import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

import { menuItemOperations, menuItemSelectors } from './duck';

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
      selectedItem: { category },
    } = this.props;

    return location.state
      ? history.push(location.state.from)
      : history.push({
          pathname: '/menu',
          search: `?category=${category}`,
        });
  };

  render() {
    const { selectedItem } = this.props;
    return <MenuItem currentItem={selectedItem} goBack={this.handleGoBack} />;
  }
}

const mtsp = state => ({
  selectedItem: menuItemSelectors.getSelectedItem(state),
});
const mtdp = {
  fetchMenuItem: menuItemOperations.fetchMenuItem,
};

export default connect(
  mtsp,
  mtdp,
)(MenuItemComponent);
