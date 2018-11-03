/* UserProfile.js */
import React from 'react';

import UserAvatar from './components/UserAvatar';
import UserDetailsBox from './components/UserDetailsBox';
import UserPhotos from './components/UserPhotos';
import UserPosts from './components/UserPosts';

const UserProfile = ({
  user,
  showAvatar,
  showPosts,
  showPhotos,
  updateShowAvatar,
  updateShowPhotos,
  updateShowPosts,
}) => (
  <div className="user-profile">
    <UserDetailsBox user={user} />
    {showAvatar && <UserAvatar user={user} size="sm" />}
    {showPosts && <UserPhotos user={user} count={5} sort="DESC" />}
    {showPhotos && <UserPosts user={user} count={5} sort="DESC" />}
    <input
      id="show-avatar-toggler"
      type="checkbox"
      checked={showAvatar}
      onChange={e => updateShowAvatar(e.target.checked)}
    />
    <input
      id="show-photos-toggler"
      type="checkbox"
      checked={showPhotos}
      onChange={e => updateShowPhotos(e.target.checked)}
    />
    <input
      id="show-posts-toggler"
      type="checkbox"
      checked={showPosts}
      onChange={e => updateShowPosts(e.target.checked)}
    />
  </div>
);

export default UserProfile;
