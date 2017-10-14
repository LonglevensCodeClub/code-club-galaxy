import { combineReducers } from 'redux'

import { UPDATE_ELEMENT } from './actions'
import { ADD_GALAXY } from './actions'

const defaultStateGalaxies = {}

const galaxies = (
    state = defaultStateGalaxies,
    action
 ) => {
    switch (action.type) {
        case ADD_GALAXY:
            return {
                ...state,
                [action.galaxyId]: {
                    id: action.galaxyId
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
        case UPDATE_ELEMENT:
            return {
                ...state,
                [action.elementState.id]: {
                    ...state[action.elementState.id],
                    ...action.elementState
                }
            }
        default:
            return state;
     }
 }

 export default combineReducers({
    elements,
    galaxies
 })