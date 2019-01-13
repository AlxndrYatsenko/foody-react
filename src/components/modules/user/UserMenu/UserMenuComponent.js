import React, { PureComponent, createRef } from 'react';

import UserMenuView from './UserMenuView';

import s from './UserMenu.module.css';

export default class UserMenuComponent extends PureComponent {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleESCWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleESCWindow);
  }

  handleESCWindow = e => {
    const keyDown = e.keyCode;
    if (keyDown !== 27) return;
    this.closeDropdown();
  };

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    if (isTargetInsideContainer) {
      this.openDropdown();
    }
    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { user } = this.props;
    const { isDropdownOpen } = this.state;
    return (
      <div ref={this.containerRef} className={s.wrap}>
        <UserMenuView
          user={user}
          onClose={this.closeDropdown}
          isDropdownOpen={isDropdownOpen}
        />
      </div>
    );
  }
}
