import React from 'react';
import styled from 'styled-components';
import { BookListShape } from '../shapes';

import Book from './Book';

const BookListContainer = styled.div`
  ${() => ''} display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default function BookList({ books }) {
  return (
    <BookListContainer>
      {books.map(({ id, title, description, cover }) => (
        <Book description={description} key={id} title={title} cover={cover} />
      ))}
    </BookListContainer>
  );
}

BookList.propTypes = {
  books: BookListShape,
};

BookList.defaultProps = {
  books: [],
};
