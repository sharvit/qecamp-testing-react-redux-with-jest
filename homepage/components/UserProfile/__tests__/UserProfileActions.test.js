/* UserProfileActions.test.js */
import { testActionSnapshotWithFixtures } from '../../../../testHelpers';
import {
  updateShowAvatar,
  updateShowPosts,
  updateShowPhotos,
} from '../UserProfileActions';

const fixtures = {
  'should update-show-avatar': () => updateShowAvatar(true),
  'should update-show-posts': () => updateShowPosts(true),
  'should update-show-photos': () => updateShowPhotos(true),
};

describe('UserProfile - Actions', () =>
  testActionSnapshotWithFixtures(fixtures));
