import React from 'react';
import IntegrationTestHelper from '../../../../IntegrationTestHelper';

import UserProfile, { reducers } from '../index';

describe('UserProfile - Integration Test', () => {
  it('should flow', () => {
    const integrationTestHelper = new IntegrationTestHelper(reducers);

    const component = integrationTestHelper.mount(
      <UserProfile user="some-user" />
    );

    // The user-avatar should not be shown
    expect(component.exists('UserAvatar')).toEqual(false);
    integrationTestHelper.takeStoreSnapshot('initial state');

    // trigger checkbox change
    component
      .find('input#show-avatar-toggler')
      .simulate('change', { target: { checked: true } });

    // The user-avatar should be shown now
    expect(component.exists('UserAvatar')).toEqual(true);
    integrationTestHelper.takeStoreAndLastActionSnapshot(
      'Update to show the user-avatar'
    );
  });
});
