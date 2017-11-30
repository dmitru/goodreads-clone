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

const Button = styled.button`
  padding: 0.5rem;
  background: white;
`;

const BookCover = styled.img`
  width: 100%;
`;

export default class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
    };

    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  handleToggleFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite,
    });
  }

  render() {
    const { title, description, cover, titleColor } = this.props;

    return (
      <BookWrapper>
        <BookCover src={cover} alt={title} />
        <BookTitle color={titleColor}>
          {this.state.isFavorite ? '★' : '☆'} {title}
        </BookTitle>
        <div>
          <Button onClick={this.handleToggleFavorite}>
            {this.state.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Button>
        </div>
        <p>{description || <em>No description :(</em>}</p>
      </BookWrapper>
    );
  }
}

Book.propTypes = BookShape;

Book.defaultProps = {
  description: null,
  titleColor: null,
  cover: 'http://placehold.it/313x475',
};
