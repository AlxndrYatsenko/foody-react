import React from 'react';

const UserMenu = ({ user }) => {
  const avatar = (
    <img
      className="user-avatar"
      src={user.avatar}
      alt={user.name}
      width="100px"
      height="auto"
    />
  );
  const name = <p className="user-name">{user.name}</p>;

  return (
    <div className="user-name">
      {avatar}
      {name}
    </div>
  );
};
export default UserMenu;
