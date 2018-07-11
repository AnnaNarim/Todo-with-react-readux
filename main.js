import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import reducers from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
