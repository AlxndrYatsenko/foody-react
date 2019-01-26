import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../configs/routes';

import s from './Auth.module.css';

const Auth = () => (
  <div className={s.wrap}>
    <Link className={s.link} to={routes.SIGNUP}>
      Sign up
    </Link>
    <Link className={s.link} to={routes.SIGNIN}>
      Sign in
    </Link>
  </div>
);

export default Auth;
