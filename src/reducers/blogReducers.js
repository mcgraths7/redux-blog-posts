import _ from 'lodash-core';

const blogsReducer = (blogs = {}, action) => {
  const newBlogs = { ...blogs };
  const { type, payload } = action;
  switch (type) {
    case 'blogs/all_blogs':
      return newBlogs;
    case 'blogs/add_many_blogs':
      return { ...newBlogs, ...payload };
    case 'blogs/remove_blog':
      return _.pickBy(newBlogs, (blog) => blog.id !== payload);
    default:
      return blogs;
  }
};

export default blogsReducer;
