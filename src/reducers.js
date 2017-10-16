import { combineReducers } from 'redux'

import { UPDATE_ELEMENTS, ADD_GALAXY, RECORD_FPS } from './actions'

const defaultStateGalaxies = {}

const galaxies = (
    state = defaultStateGalaxies,
    action
 ) => {
    switch (action.type) {
        case ADD_GALAXY:
            return {
                ...state,
                [action.galaxyState.id]: {
                    ...state[action.galaxyState.id],
                    ...action.galaxyState
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
    galaxies,
    ui
 })