import React from 'react';
import styled from 'styled-components';

import { BookListShape } from '../shapes';
import BookList from './BookList';

const PageTitle = styled.h2`
  font-weight: normal;
  font-size: 1.6rem;
  color: black;
  margin-top: 0;
`;

export default class BookListPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>Browse Books</PageTitle>
        <BookList books={this.props.books} />
      </div>
    );
  }
}

BookListPage.propTypes = {
  books: BookListShape.isRequired,
};
