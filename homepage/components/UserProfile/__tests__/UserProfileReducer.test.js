import { testReducerSnapshotWithFixtures } from '../../../../testHelpers';

import {
  USER_PROFILE_UPDATE_AVATAR,
  USER_PROFILE_UPDATE_POSTS,
  USER_PROFILE_UPDATE_PHOTOS,
} from '../UserProfileConstants';
import reducer from '../UserProfileReducer';

const fixtures = {
  'should return the initial state': {},
  'should handle USER_PROFILE_UPDATE_AVATAR': {
    action: {
      type: USER_PROFILE_UPDATE_AVATAR,
      payload: true,
    },
  },
  'should handle USER_PROFILE_UPDATE_POSTS': {
    action: {
      type: USER_PROFILE_UPDATE_POSTS,
      payload: true,
    },
  },
  'should handle USER_PROFILE_UPDATE_PHOTOS': {
    action: {
      type: USER_PROFILE_UPDATE_PHOTOS,
      payload: true,
    },
  },
};

describe('UserProfile - Reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
