import { testSelectorsSnapshotWithFixtures } from '../../../../testHelpers';
import {
  selectShowAvatar,
  selectShowPosts,
  selectShowPhotos,
} from '../UserProfileSelectors';

const state = {
  userProfile: {
    showAvatar: 'showAvatar',
    showPosts: 'showPosts',
    showPhotos: 'showPhotos',
  },
};

const fixtures = {
  'should select show-avatar': () => selectShowAvatar(state),
  'should select show-posts': () => selectShowPosts(state),
  'should select show-photos': () => selectShowPhotos(state),
};

describe('UserProfile - Selectors', () =>
  testSelectorsSnapshotWithFixtures(fixtures));
