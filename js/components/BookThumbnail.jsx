import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';
import { BookShape } from '../shapes';

const BookWrapper = styled.div`
  min-width: 130px;
  max-width: 200px;
  flex: 1;
  min-height: 200px;
  border: 1px solid #39210f55;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const BookTitleLink = styled(Link)`
  font-weight: normal;
  font-size: 1.4rem;
  color: ${props => props.color || 'black'};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const BookCover = styled.img`
  width: 100%;
`;

export default class BookThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  handleToggleFavorite() {
    const { book } = this.props;
    this.props.onFavoriteChange(book.id, !this.props.book.isFavorite);
  }

  render() {
    const { id, title, description, cover, titleColor, isFavorite } = this.props.book;

    return (
      <BookWrapper>
        <BookCover src={cover} alt={title} />
        <BookTitleLink color={titleColor} to={`/books/${id}`}>
          {isFavorite ? '★' : '☆'} {title}
        </BookTitleLink>
        <p>{description || <em>No description :(</em>}</p>

        <div>
          <Button onClick={this.handleToggleFavorite}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Button>
        </div>
      </BookWrapper>
    );
  }
}

BookThumbnail.propTypes = {
  book: BookShape.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};
