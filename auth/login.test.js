/* login.test.js */
import login from './login';

import authenticateUserPassword from './authenticateUserPassword';
import getUser from './getUser';

jest.mock('./authenticateUserPassword');
jest.mock('./getUser');

describe('Auth - login', () => {
  const username = 'some-username';
  const user = 'some-user';
  const password = 'some-password';

  getUser.mockImplementation(() => user);

  it('should login with username and password', () => {
    authenticateUserPassword.mockImplementation(() => true);

    const results = login(username, password);

    expect(results).toEqual(user);
  });

  it('should throw error when login with wrong password', () => {
    authenticateUserPassword.mockImplementation(() => false);

    const doLogin = () => login(username, password);

    expect(doLogin).toThrow(new Error('Wrong password'));
  });
});
