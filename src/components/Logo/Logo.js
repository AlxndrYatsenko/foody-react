import React, { Fragment } from 'react';
import logo from './logoData';
import s from './Logo.module.css';

const Logo = ({ width = 150 }) => {
  const img = (
    <img className={s.logo} alt={logo.alt} src={logo.src} width={width} />
  );
  return <Fragment>{img}</Fragment>;
};

export default Logo;
