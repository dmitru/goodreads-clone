import React from 'react';
import PropTypes from 'prop-types';
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

export default function BookList({ books, onFavoriteChange }) {
  return (
    <BookListContainer>
      {books.map(book => <BookThumbnail key={book.id} book={book} onFavoriteChange={onFavoriteChange} />)}
    </BookListContainer>
  );
}

BookList.propTypes = {
  books: BookListShape,
  onFavoriteChange: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};
