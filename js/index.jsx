import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import '../styles/global.css';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}
