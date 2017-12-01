export function getBooks() {
  const BOOKS = [
    {
      title: 'Lord of the Buffer Rings',
      description: 'A handy book indeed',
      cover: '/public/img/book-cover-lord-of-the-rings.jpg',
      isFavorite: false,
    },
    {
      title: 'Harry Potter and the Virtual DOM',
      cover: '/public/img/book-cover-harry-potter.jpg',
      isFavorite: false,
    },
    {
      title: '30 Days without jQuery',
      description: 'Exactly what you need',
      cover: '/public/img/book-cover-30-days.jpg',
      isFavorite: false,
    },
    {
      title: '7 Habits of Highly Effective Procrastinators',
      cover: '/public/img/book-cover-7-habits.jpg',
      isFavorite: false,
    },
  ];

  const BOOKS_MOCKED_RESPONSE = new Array(30)
    .fill(null)
    .map((_, index) => Object.assign({}, BOOKS[Math.floor(Math.random() * BOOKS.length)], { id: index }));

  return new Promise(resolve => {
    setTimeout(() => resolve(BOOKS_MOCKED_RESPONSE), 1000);
  });
}

export function getBookReviews(bookId) {
  const REVIEW_TEXT_OPTIONS = ['Awesome!', 'The best thing happenned to me...', 'Below average!', 'Life-changing'];

  const REVIEWS_MOCKED_RESPONSE = new Array(Math.round(Math.random() * 4)).fill(null).map((_, index) => ({
    id: index,
    bookId,
    text: REVIEW_TEXT_OPTIONS[Math.floor(Math.random() * REVIEW_TEXT_OPTIONS.length)],
  }));

  return new Promise(resolve => {
    setTimeout(() => resolve(REVIEWS_MOCKED_RESPONSE), 1000);
  });
}
