import React from 'react';

import Book from './Book';

const bookData = [
  {
    id: 1,
    title: 'Lord of the Buffer Rings',
    description: 'A handy book indeed',
  },
  {
    id: 2,
    title: 'Harry Potter and the Virtual DOM',
  },
  {
    id: 3,
    title: '30 Days without jQuery',
    description: 'Exactly what you need',
  },
  {
    id: 4,
    title: '7 Habits of Highly Effective Procrastinators',
  },
];

export default function BookList() {
  return (
    <div>{bookData.map(({ id, title, description }) => <Book description={description} key={id} title={title} />)}</div>
  );
}
