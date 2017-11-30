import PropTypes from 'prop-types';

export const BookShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cover: PropTypes.string,
  titleColor: PropTypes.string,
});

export const BookListShape = PropTypes.arrayOf(BookShape);
