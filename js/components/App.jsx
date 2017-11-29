import React from 'react';
import styled from 'styled-components';

import BookList from './BookList';

const books = [
  {
    id: 1,
    title: 'Lord of the Buffer Rings',
    description: 'A handy book indeed',
    cover: '/public/img/book-cover-lord-of-the-rings.jpg',
  },
  {
    id: 2,
    title: 'Harry Potter and the Virtual DOM',
    cover: '/public/img/book-cover-harry-potter.jpg',
  },
  {
    id: 3,
    title: '30 Days without jQuery',
    description: 'Exactly what you need',
    cover: '/public/img/book-cover-30-days.jpg',
  },
  {
    id: 4,
    title: '7 Habits of Highly Effective Procrastinators',
    cover: '/public/img/book-cover-7-habits.jpg',
  },
];

const AppContainer = styled.div`
  padding: 2rem;
  background: white;
`;

const AppHeaderWrapper = styled.div`
  background: #fdf6e2;
  border-bottom: 1px #e4e2df;
  color: #39210f;
  padding: 1rem;
  padding-left: 2.5rem;
`;

const AppTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
`;

const AppHeader = () => {
  return (
    <AppHeaderWrapper>
      <AppTitle>BestReads</AppTitle>
    </AppHeaderWrapper>
  );
};

export default function App() {
  return [
    <AppHeader key="app-header" />,
    <AppContainer key="app-container">
      <BookList books={books} />
    </AppContainer>,
  ];
}
