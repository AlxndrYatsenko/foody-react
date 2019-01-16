import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

import menuSelectors from '../Menu/duck/menuSelectors';
import { menuItemOperations } from './duck';

class MenuItemComponent extends Component {
  // componentDidMount() {
  //   const {
  //     match: { params },
  //   } = this.props;
  //   console.log(params);

  //   // const { selectItem } = this.props;
  //   // console.log(selectItem(params.id));
  //   // selectItem(params.id);

  //   const { fetchMenuItem } = this.props;
  //   // console.log(fetchMenuItem(params.id));
  //   fetchMenuItem(params.id);
  // }

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
  currentItem: menuSelectors.getCurrentItem(state),
});
const mtdp = {
  // selectItem: menuItemSelectors.selectItem,
  fetchMenuItem: menuItemOperations.fetchMenuItem,
};

export default connect(
  mtsp,
  mtdp,
)(MenuItemComponent);
