const authorsReducer = (users = {}, action) => {
  const newUsers = { ...users };
  const { type, payload } = action;
  switch (type) {
    case 'authors/add_author':
      newUsers[payload.id] = payload;
      return newUsers;
    default:
      return users;
  }
};

export default authorsReducer;
