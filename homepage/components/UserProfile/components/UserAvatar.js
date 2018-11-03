import React from 'react';

const UserAvatar = ({ user }) => (
  <div className="user-avatar">
    <img src={user.avatarUrl} alt={user.fullName} />
  </div>
);

export default UserAvatar;
