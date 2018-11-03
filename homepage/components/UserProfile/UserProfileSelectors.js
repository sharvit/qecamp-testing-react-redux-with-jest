const selectState = state => state.userProfile;

export const selectShowAvatar = state => selectState(state).showAvatar;
export const selectShowPosts = state => selectState(state).showPosts;
export const selectShowPhotos = state => selectState(state).showPhotos;
