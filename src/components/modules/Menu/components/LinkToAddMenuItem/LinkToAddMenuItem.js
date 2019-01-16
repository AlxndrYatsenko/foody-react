import React from 'react';
import { Link } from 'react-router-dom';

import s from './LinkToAddMenuItem.module.css';

const LinkToAddMenuItem = ({ match, location }) => (
  <div className={s.addLinkContainer}>
    <Link
      className={s.addLink}
      to={{
        pathname: `${match.url}/add`,
        state: { from: location },
      }}
    >
      Добавить элемент меню
    </Link>
  </div>
);

export default LinkToAddMenuItem;
