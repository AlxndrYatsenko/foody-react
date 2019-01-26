import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import UserProfile from './UserProfile';

import s from './UserProfile.module.css';
import { getUser } from '../../session/sessionSelectors';
import { signOut } from '../../session/sessionOperations';

class UserProfileContainer extends Component {
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
    const { isDropdownOpen } = this.state;
    const { user, onSignOut } = this.props;
    return (
      <div className={s.container}>
        <div ref={this.containerRef} className={s.wrap}>
          <UserProfile
            user={user}
            onClose={this.closeDropdown}
            isDropdownOpen={isDropdownOpen}
          />
        </div>
        <button className={s.link} type="button" onClick={onSignOut}>
          Sign out
        </button>
      </div>
    );
  }
}

const mstp = state => ({
  user: getUser(state),
});

const mdtp = {
  onSignOut: signOut,
};

export default connect(
  mstp,
  mdtp,
)(UserProfileContainer);
