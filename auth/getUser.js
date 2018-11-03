const users = {
  avi: { password: '1234' },
  amir: { password: '4321' },
};

const getUser = username => {
  const user = users[username];

  if (!user) {
    throw new Error('User does not exist');
  }

  return user;
};

export default getUser;
