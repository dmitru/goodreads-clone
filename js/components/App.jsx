import React from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Link } from 'react-router-dom';

import BookListPage from './BookListPage';
import BookDetailsPage from './BookDetailsPage';
import LandingPage from './LandingPage';

const AppContainer = styled.div`
  padding: 2rem;
  background: white;
`;

const AppHeaderWrapper = styled.div`
  background: #fdf6e2;
  border-bottom: 1px #e4e2df;
  color: #39210f;
  padding: 1rem;
  padding-left: 2rem;
`;

const AppTitleLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
  text-decoration: none;
  color: black;
`;

const AppWrapper = styled.div``;

const AppHeader = () => {
  return (
    <AppHeaderWrapper>
      <AppTitleLink to="/">BestReads</AppTitleLink>
    </AppHeaderWrapper>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);

    this.state = {
      books: [
        {
          id: 1,
          title: 'Lord of the Buffer Rings',
          description: 'A handy book indeed',
          cover: '/public/img/book-cover-lord-of-the-rings.jpg',
          isFavorite: false,
        },
        {
          id: 2,
          title: 'Harry Potter and the Virtual DOM',
          cover: '/public/img/book-cover-harry-potter.jpg',
          isFavorite: false,
        },
        {
          id: 3,
          title: '30 Days without jQuery',
          description: 'Exactly what you need',
          cover: '/public/img/book-cover-30-days.jpg',
          isFavorite: false,
        },
        {
          id: 4,
          title: '7 Habits of Highly Effective Procrastinators',
          cover: '/public/img/book-cover-7-habits.jpg',
          isFavorite: false,
        },
      ],
    };
  }

  handleFavoriteChange(bookId, isFavorite) {
    const updatedBooks = this.state.books.map(book => {
      if (book.id === bookId) {
        return Object.assign({}, book, { isFavorite });
      }
      return book;
    });

    this.setState({ books: updatedBooks });
  }

  render() {
    return (
      <HashRouter>
        <AppWrapper>
          <AppHeader />
          <AppContainer>
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/books"
              component={() => <BookListPage books={this.state.books} onFavoriteChange={this.handleFavoriteChange} />}
            />
            <Route
              exact
              path="/books/:id"
              component={({ match: { params: { id } } }) => {
                const book = this.state.books.find(b => b.id == id);
                if (!book) {
                  return <h1>404!</h1>;
                }
                return <BookDetailsPage book={book} onFavoriteChange={this.handleFavoriteChange} />;
              }}
            />
          </AppContainer>
        </AppWrapper>
      </HashRouter>
    );
  }
}
