import React from 'react';

import Book from './Book';

export default function BookList() {
  return React.createElement(
    'div',
    null,
    React.createElement(Book, { title: 'Lord of the Buffer Rings', titleColor: 'pink' }, null),
    React.createElement(
      Book,
      {
        title: 'Harry Potter and the Virtual DOM',
        description: 'A handy book!',
      },
      null
    ),
    React.createElement(Book, { title: '30 Days without jQuery' }, null),
    React.createElement(Book, { title: '7 Habits of Highly Effective Procrastinators' }, null)
  );
}
