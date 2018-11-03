/* login.js */
import authenticateUserPassword from './authenticateUserPassword';
import getUser from './getUser';

const login = (username, password) => {
  const user = getUser(username);

  if (!authenticateUserPassword(user, password)) {
    throw new Error('Wrong password');
  }

  return user;
};

export default login;
