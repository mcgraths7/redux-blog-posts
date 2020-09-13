import placeholder from '../apis/placeholder';

const asyncFetchAuthor = (authorId) => async (dispatch) => {
  const response = await placeholder.get(`/users/${authorId}`);
  dispatch({ type: 'authors/add_author', payload: response.data });
};

export default asyncFetchAuthor;
