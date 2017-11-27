import React from 'react';
import PropTypes from 'prop-types';
import getRandomColor from '../util/getRandomColor';

export default function Book({ title, description, titleColor }) {
  const titleStyle = {
    color: titleColor || getRandomColor(),
  };

  const bookWrapperStyle = {
    border: '1px solid black',
    margin: '0.5rem',
    padding: '0.5rem',
  };

  return (
    <div style={bookWrapperStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {description ? <p>{description}</p> : <em>No description :(</em>}
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  titleColor: PropTypes.string,
};

Book.defaultProps = {
  description: null,
  titleColor: null,
};
