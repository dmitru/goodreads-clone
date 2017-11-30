import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export default class BookDetailsPage extends React.Component {
  render() {
    const { title, cover, description } = this.props.book;
    return (
      <div>
        <PageTitle>Book Details: {title}</PageTitle>
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
};
