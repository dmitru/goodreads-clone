import React from 'react';
import styled from 'styled-components';

import { BookShape } from '../shapes';
import getRandomColor from '../util/getRandomColor';

const BookWrapper = styled.div`
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const BookTitle = styled.h2`
  color: ${props => props.color || getRandomColor()};
`;

export default function Book({ title, description, titleColor }) {
  return (
    <BookWrapper>
      <BookTitle color={titleColor}>{title}</BookTitle>
      {description ? <p>{description}</p> : <em>No description :(</em>}
    </BookWrapper>
  );
}

Book.propTypes = BookShape;

Book.defaultProps = {
  description: null,
  titleColor: null,
};
