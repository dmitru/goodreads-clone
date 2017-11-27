import React from 'react';
import { BookListShape } from '../shapes';

import Book from './Book';

export default function BookList({ books }) {
  return (
    <div>{books.map(({ id, title, description }) => <Book description={description} key={id} title={title} />)}</div>
  );
}

BookList.propTypes = {
  books: BookListShape,
};

BookList.defaultProps = {
  books: [],
};
