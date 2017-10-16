import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { createStore  } from 'redux'
import reducer from './reducers'

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(reducer)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
});
