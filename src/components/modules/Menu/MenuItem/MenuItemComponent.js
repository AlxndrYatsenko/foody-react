import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItemView from './MenuItemView';

import { menuItemOperations } from './duck';
import s from './MenuItem.module.css';

// import { getMenuItemById } from '../../../../services/api';

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
    return (
      <>
        <button
          className={s.goBackBtn}
          onClick={this.handleGoBack}
          type="button"
        >
          Назад к меню
        </button>
        <MenuItemView {...this.props} />
      </>
    );
  }
}

const mtsp = state => ({
  currentItem: state.menu.currentItem,
});
const mtdp = {
  fetchMenuItem: menuItemOperations.fetchMenuItem,
};

export default connect(
  mtsp,
  mtdp,
)(MenuItemComponent);
