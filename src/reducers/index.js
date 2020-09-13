import { combineReducers } from 'redux';

import blogsReducer from './blogReducers';

export default combineReducers({
  blogs: blogsReducer,
});
