import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
//import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware  } from 'redux'
import reducer from './reducers'
import { updateElements, addTile, recordFps } from './actions'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import animationBoards from './animationBoards'

//const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
//        loggerMiddleware // neat middleware that logs actions
    )
)

// Create a collection to hold all the elements
const elementCollection = []

// Pass the collection to each element creator
Object.keys(animationBoards).forEach(tileType => {
    animationBoards[tileType].tiles.forEach(tile => {
        tile.state.tileType = tileType
        store.dispatch(addTile(tile.state))
        
        const animationElements = []

        tile.elements.forEach(element => {
            element.children.forEach(child => animationElements.push(child))
            animationElements.push(element)
        })
        animationElements.forEach(ae => ae.state.tileType = tileType)
        animationElements.forEach(ae => elementCollection.push(ae))
    })
})

const FPS = 30
const interval = 1000 / FPS

let frames = 0

setInterval(() => {
    let timeNow = new Date().getTime();

    let elements = {}

    elementCollection.forEach(e => {
        e.updateFrame(timeNow)
        elements[e.id] = e.state
    })

    store.dispatch(updateElements(elements))

    frames += 1
}, interval)

setInterval(() => {
    store.dispatch(recordFps(frames))
    frames = 0
}, 1000)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
