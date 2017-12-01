import React from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Link } from 'react-router-dom';

import { getBooks } from '../apiClient';

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

const PreloadingWrapper = styled.div`
  text-align: center;
  margin-top: 200px;
  margin-top: 40vh;
`;

const PreloadingTitle = styled.h1`
  color: #999;
  font-size: 2rem;
  font-weight: normal;
`;

const PreloadingScreen = () => {
  return (
    <PreloadingWrapper>
      <PreloadingTitle>Loading...</PreloadingTitle>
    </PreloadingWrapper>
  );
};

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
      books: null,
      isLoading: true,
      isLoadingError: null,
    };
  }

  componentDidMount() {
    getBooks()
      .then(books => {
        this.setState({ books, isLoading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ isLoading: false, isLoadingError: true });
      });
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
    if (this.state.isLoading) {
      return <PreloadingScreen />;
    }

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
