import React from 'react';

import Book from './Book';

export default function BookList() {
  return (
    <div>
      <Book title="Lord of the Buffer Rings" titleColor="pink" />
      <Book title="Harry Potter and the Virtual DOM" description="A handy book indeed!" />
      <Book title="30 Days without jQuery" />
      <Book title="7 Habits of Highly Effective Procrastinators" />
    </div>
  );
}
