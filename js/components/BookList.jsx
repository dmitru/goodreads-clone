import React from 'react';
import styled from 'styled-components';
import { BookListShape } from '../shapes';

import BookThumbnail from './BookThumbnail';

const BookListContainer = styled.div`
  ${() => ''} display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default function BookList({ books }) {
  return <BookListContainer>{books.map(book => <BookThumbnail key={book.id} book={book} />)}</BookListContainer>;
}

BookList.propTypes = {
  books: BookListShape,
};

BookList.defaultProps = {
  books: [],
};
