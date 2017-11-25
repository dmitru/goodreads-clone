function getRandomColor() {
  const COLORS = ['red', 'blue', 'darkgreen', 'peru'];
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function Book({ title, description, titleColor }) {
  const titleStyle = {
    color: titleColor || getRandomColor()
  };

  const bookWrapperStyle = {
    border: '1px solid black',
    margin: '0.5rem',
    padding: '0.5rem'
  };

  return React.createElement(
    'div',
    { style: bookWrapperStyle },
    React.createElement('h2', { style: titleStyle }, title),
    React.createElement('p', null, description)
  );
}

function BookList() {
  return React.createElement(
    'div',
    null,
    React.createElement(Book, { title: 'Lord of the Buffer Rings', titleColor: 'pink' }, null),
    React.createElement(
      Book,
      {
        title: 'Harry Potter and the Virtual DOM',
        description: 'A handy book!'
      },
      null
    ),
    React.createElement(Book, { title: '30 Days without jQuery' }, null),
    React.createElement(Book, { title: '7 Habits of Highly Effective Procrastinators' }, null)
  );
}

function App() {
  return React.createElement('div', null, React.createElement(BookList, null, null));
}

ReactDOM.render(React.createElement(App, null, null), document.getElementById('app'));
