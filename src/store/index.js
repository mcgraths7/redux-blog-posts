/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import blogReducers from '../reducers/blogReducers';
import authorsReducer from '../reducers/authorsReducer';

const store = createStore(
  combineReducers({ blogs: blogReducers, authors: authorsReducer }),
  applyMiddleware(thunk),
);

export default store;
