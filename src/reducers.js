import { combineReducers } from 'redux'

import { UPDATE_ELEMENTS, ADD_TILE, RECORD_FPS } from './actions'

const defaultStateTiles = {}

const tiles = (
    state = defaultStateTiles,
    action
 ) => {
    switch (action.type) {
        case ADD_TILE:
            return {
                ...state,
                [action.tileState.id]: {
                    ...state[action.tileState.id],
                    ...action.tileState
                }
            }
        default:
            return state;
     }
 }

const defaultStateElements = {}

const elements = (
    state = defaultStateElements,
    action
 ) => {
    switch (action.type) {
        case UPDATE_ELEMENTS:
            return action.elements
        default:
            return state
     }
 }

 const defaultStateUi = {
    fps: 0
}

 const ui = (
     state = defaultStateUi,
     action
 ) => {
     switch (action.type) {
         case RECORD_FPS:
            return {
                ...state,
                fps: action.fps
            }
        default:
            return state
     }
 }

 export default combineReducers({
    elements,
    tiles,
    ui
 })