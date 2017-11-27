import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

export default function BookList({ books }) {
  return (
    <div>{books.map(({ id, title, description }) => <Book description={description} key={id} title={title} />)}</div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      titleColor: PropTypes.string,
    })
  ),
};

BookList.defaultProps = {
  books: [],
};
