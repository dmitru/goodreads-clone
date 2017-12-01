import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BookListShape } from '../shapes';
import BookList from './BookList';

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

// eslint-disable-next-line
export default class BookListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: null,
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  getFilteredBooks() {
    const { searchInput } = this.state;
    const { books } = this.props;
    if (!searchInput) {
      return books;
    }

    return books.filter(b => b.title.toLowerCase().indexOf(searchInput) > -1);
  }

  handleSearchInputChange(event) {
    const value = event.target.value;
    this.setState({ searchInput: value ? value.trim().toLowerCase() : null });
  }

  render() {
    const filteredBooks = this.getFilteredBooks();
    return (
      <div>
        <SearchInput onChange={this.handleSearchInputChange} placeholder="Search a book..." />
        {this.state.searchInput && filteredBooks.length === 0 ? (
          <p>
            <em>No books found!</em>
          </p>
        ) : (
          <BookList books={filteredBooks} onFavoriteChange={this.props.onFavoriteChange} />
        )}
      </div>
    );
  }
}

BookListPage.propTypes = {
  books: BookListShape.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};
