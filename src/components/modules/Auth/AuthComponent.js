import React, { Component } from 'react';

import AuthView from './AuthView';

export default class AuthComponent extends Component {
  state = {
    singIn: false,
  };

  handleSwitchToSingin = () => {
    this.setState({ singIn: true });
  };

  handleSwitchToSingup = () => {
    this.setState({ singIn: false });
  };

  render() {
    const { singIn } = this.state;
    return (
      <AuthView
        singIn={singIn}
        onSwitchToSingup={this.handleSwitchToSingup}
        onSwitchToSingin={this.handleSwitchToSingin}
      />
    );
  }
}
