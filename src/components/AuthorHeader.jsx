/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import asyncFetchAuthor from '../actions/authorActions';

const AuthorHeader = ({ author, authorId }) => {
  if (!author) {
    return <p>Unknown Author</p>;
  }
  return <p>{author.name}</p>;
};
const mapStateToProps = (state, ownProps) => ({
  author: state.authors[ownProps.authorId],
});

export default connect(mapStateToProps, { fetchAuthor: asyncFetchAuthor })(AuthorHeader);
