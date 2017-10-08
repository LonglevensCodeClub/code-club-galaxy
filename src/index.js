import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware  } from 'redux'
import reducer from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        loggerMiddleware // neat middleware that logs actions
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
