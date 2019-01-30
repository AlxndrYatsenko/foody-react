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
      params: { id },
    } = this.props.match;

    getMenuItemById(id).then(currentItem =>
      this.setState({
        currentItem,
      }),
    );
  }

  handleGoBack = () => {
    const { history, location, match } = this.props;
    const { id } = match.params.id;

    return history.push(
      location.state.from || {
        pathname: '/menu',
        search: `?category=${id}`,
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
