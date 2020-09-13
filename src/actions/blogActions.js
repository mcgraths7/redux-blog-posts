import placeholder from '../apis/placeholder';

const asyncFetchBlogs = () => async (dispatch) => {
  const response = await placeholder.get('/posts');
  return dispatch({
    type: 'blogs/add_many_blogs',
    payload: response.data,
  });
};

export default asyncFetchBlogs;
