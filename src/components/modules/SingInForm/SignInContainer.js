import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';

import SignInForm from './SignInForm';

// import { signIn } from '../session/sessionOperations';
import withAuth from '../../hoc/withAuth';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInContainer extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const { signIn } = this.props;
    signIn({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <SignInForm
        {...this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

// const SignInContainerWithAuth = withAuth(SignInContainer);
// console.log(<SignInContainerWithAuth />);

// const mdtp = {
//   onSubmit: signIn,
// };

// export default connect(
//   null,
//   mdtp,
// )(SignInContainer);

// SignInContainer;

export default withAuth(SignInContainer);
