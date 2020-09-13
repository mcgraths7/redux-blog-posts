import _ from 'lodash-core';
import asyncFetchAuthor from './authorActions';
import asyncAddManyBlogs from './blogActions';

const asyncFetchBlogsAndUsers = () => async (dispatch, getState) => {
  await dispatch(asyncAddManyBlogs());

  _.chain(getState().blogs)
    .map('userId')
    .uniq()
    .forEach((userId) => dispatch(asyncFetchAuthor(userId)))
    .value();
};

export default asyncFetchBlogsAndUsers;
