import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

import { cartActions } from '../Cart/duck';
import { getMenuItemById } from '../../../services/api';

import { menuItemOperations } from './duck';

class MenuItemComponent extends Component {
  state = {
    currentItem: {},
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    getMenuItemById(params.id).then(currentItem =>
      this.setState({
        currentItem,
      }),
    );
  }

  handleGoBack = () => {
    const {
      history,
      location,
      match: { params },
    } = this.props;

    return history.push(
      location.state.from || {
        pathname: '/menu',
        search: `?category=${params.id}`,
      },
    );
  };

  render() {
    const { addToCart } = this.props;
    const { currentItem } = this.state;
    return (
      <MenuItem
        currentItem={currentItem}
        addToCart={addToCart}
        goBack={this.handleGoBack}
      />
    );
  }
}

const mdtp = {
  addToCart: cartActions.addToCart,
  fetchMenuItem: menuItemOperations.fetchMenuItem,
};

export default connect(
  null,
  mdtp,
)(MenuItemComponent);
