/* UserProfile.test.js */
import { testComponentSnapshotsWithFixtures } from '../../../../testHelpers';

import UserProfile from '../UserProfile';

const fixtures = {
  'should render UserProfile': {
    user: 'some-user',
  },
  'should render UserProfile with avatar': {
    user: 'some-user',
    showAvatar: true,
  },
  'should render UserProfile with posts and photos': {
    user: 'some-user',
    showPosts: true,
    showPhotos: true,
  },
};

describe('UserProfile - component', () =>
  testComponentSnapshotsWithFixtures(UserProfile, fixtures));
