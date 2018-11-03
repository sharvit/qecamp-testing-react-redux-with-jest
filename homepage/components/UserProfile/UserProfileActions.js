/* UserProfileActions.js */
import {
  USER_PROFILE_UPDATE_AVATAR,
  USER_PROFILE_UPDATE_POSTS,
  USER_PROFILE_UPDATE_PHOTOS,
} from './UserProfileConstants';

export const updateShowAvatar = showAvatar => ({
  type: USER_PROFILE_UPDATE_AVATAR,
  payload: showAvatar,
});

export const updateShowPosts = showPosts => ({
  type: USER_PROFILE_UPDATE_POSTS,
  payload: showPosts,
});

export const updateShowPhotos = showPhotos => ({
  type: USER_PROFILE_UPDATE_PHOTOS,
  payload: showPhotos,
});
