import Immutable from 'seamless-immutable';

import {
  USER_PROFILE_UPDATE_AVATAR,
  USER_PROFILE_UPDATE_POSTS,
  USER_PROFILE_UPDATE_PHOTOS,
} from './UserProfileConstants';

const initialState = Immutable({
  showAvatar: false,
  showPosts: false,
  showPhotos: false,
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case USER_PROFILE_UPDATE_AVATAR:
      return state.set('showAvatar', payload);
    case USER_PROFILE_UPDATE_POSTS:
      return state.set('showPosts', payload);
    case USER_PROFILE_UPDATE_PHOTOS:
      return state.set('showPhotos', payload);
    default:
      return state;
  }
};
