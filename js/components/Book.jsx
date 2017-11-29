import React from 'react';
import styled from 'styled-components';

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

const BookTitle = styled.h2`
  font-weight: normal;
  font-size: 1.4rem;
  color: ${props => props.color || 'black'};
`;

const BookCover = styled.img`
  width: 100%;
`;

export default function Book({ title, description, cover, titleColor }) {
  return (
    <BookWrapper>
      <BookCover src={cover} alt={title} />
      <BookTitle color={titleColor}>{title}</BookTitle>
      {description ? <p>{description}</p> : <em>No description :(</em>}
    </BookWrapper>
  );
}

Book.propTypes = BookShape;

Book.defaultProps = {
  description: null,
  titleColor: null,
  cover: 'http://placehold.it/313x475',
};
