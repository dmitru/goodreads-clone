import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';
import { BookShape } from '../shapes';

const BookWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const PageTitle = styled.h2`
  font-weight: normal;
  font-size: 1.6rem;
  color: black;
  margin: 0;
`;

const BookCover = styled.img`
  max-width: 400px;
`;

const BookMainContent = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

// eslint-disable-next-line
export default class BookDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  handleToggleFavorite() {
    const { book } = this.props;
    this.props.onFavoriteChange(book.id, !this.props.book.isFavorite);
  }

  render() {
    const { title, cover, description, isFavorite } = this.props.book;
    return (
      <div>
        <PageTitle>
          {isFavorite ? '★' : '☆'} {title}{' '}
          <Button onClick={this.handleToggleFavorite}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Button>
        </PageTitle>
        <div>
          <Link to="/books">Go back to library</Link>
        </div>
        <BookWrapper>
          <BookCover src={cover} alt={title} />
          <BookMainContent>
            <h4>Description:</h4>
            <p>{description || <em>No description :(</em>}</p>
            <hr />
          </BookMainContent>
        </BookWrapper>
      </div>
    );
  }
}

BookDetailsPage.propTypes = {
  book: BookShape.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};
