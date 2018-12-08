import React, { Fragment } from 'react';

const Logo = ({ logo }) => {
  const img = (
    <img
      className="logo"
      alt={logo.alt}
      src={logo.src}
      width="150px"
      height="auto"
    />
  );
  return <Fragment>{img}</Fragment>;
};

export default Logo;
