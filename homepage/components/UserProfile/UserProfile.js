import React from 'react';

import UserAvatar from './UserAvatar';
import UserDetailsBox from './UserDetailsBox';
import UserPosts from './UserPosts';

const UserProfile = ({ user }) => (
  <div className="user-profile">
    <UserAvatar user={user} size="sm" />
    <UserDetailsBox user={user} />
    <UserPosts user={user} count={5} sort="DESC" />
  </div>
);

export default UserProfile;
