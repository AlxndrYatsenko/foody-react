import React from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const AuthView = ({ singIn, onSwitchToSingup, onSwitchToSingin }) => (
  <div>
    <button type="button" onClick={onSwitchToSingin}>
      Sign in
    </button>
    <button type="button" onClick={onSwitchToSingup}>
      Sign up
    </button>
    {singIn ? <SignInForm /> : <SignUpForm />}
  </div>
);

export default AuthView;
