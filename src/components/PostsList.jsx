/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash-core';
import AuthorHeader from './AuthorHeader';
import asyncFetchBlogsAndAuthors from '../actions/combinedActions';

// eslint-disable-next-line no-shadow
const PostsList = ({ blogs, fetchBlogsAndAuthors }) => {
  useEffect(() => {
    fetchBlogsAndAuthors();
  }, []);

  const renderedBlogs = _.map(blogs, (blog) => (
    <div key={blog.id} className="ui icon message">
      <i className="envelope icon" />
      <div className="content">
        <div className="header">{blog.title}</div>
        <p>{blog.body}</p>
        <div className="footer">
          <AuthorHeader authorId={blog.userId} />
        </div>
      </div>
    </div>
  ));

  return <div>{renderedBlogs}</div>;
};

const mapStateToProps = (state) => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps, {
  fetchBlogsAndAuthors: asyncFetchBlogsAndAuthors,
})(PostsList);
