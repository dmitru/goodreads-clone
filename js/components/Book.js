import React from 'react';
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

  return React.createElement(
    'div',
    { style: bookWrapperStyle },
    React.createElement('h2', { style: titleStyle }, title),
    React.createElement('p', null, description)
  );
}
