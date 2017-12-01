import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BookListShape } from '../shapes';
import BookList from './BookList';

const PageTitle = styled.h2`
  font-weight: normal;
  font-size: 1.6rem;
  color: black;
  margin-top: 0;
`;

// eslint-disable-next-line
export default class BookListPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>Browse Books</PageTitle>
        <BookList books={this.props.books} onFavoriteChange={this.props.onFavoriteChange} />
      </div>
    );
  }
}

BookListPage.propTypes = {
  books: BookListShape.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};
