import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
//import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware  } from 'redux'
import reducer from './reducers'
import { updateElement } from './actions'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { elementCreators } from './elementCreators'

//const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        //loggerMiddleware // neat middleware that logs actions
    )
)

// Create a collection to hold all the elements
const elementCollection = []

// Pass the collection to each element creator
elementCreators
    .map(c => c())
    .forEach(ec => {
        ec.forEach(e => elementCollection.push(e))
    })

const FPS = 20
const interval = 1000 / FPS

setInterval(() => {
    let timeNow = new Date().getTime();

    elementCollection.forEach(e => {
        e.updateFrame(timeNow)
        store.dispatch(updateElement(e.state))
    })
}, interval)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
