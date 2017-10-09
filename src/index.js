import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware  } from 'redux'
import reducer from './reducers'
import { updateElement } from './actions'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { elementCreators } from './elementCreators'
import ElementCollection from './classes/ElementCollection'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        loggerMiddleware // neat middleware that logs actions
    )
)

// Create a collection to hold all the elements
const elementCollection = new ElementCollection()

// Pass the collection to each element creator
elementCreators.forEach(e => e(elementCollection))

const FPS = 30
const interval = 1000 / FPS

setInterval(() => {
    elementCollection.elements.forEach(e => store.dispatch(updateElement(e.state)))
}, interval)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
