import { UPDATE_ELEMENT } from './actions'

import { defaultElements } from './elementTypes'

const defaultState = {}

const kitReducers = (
    state = defaultState,
    action
 ) => {
    switch (action.type) {
        case UPDATE_ELEMENT:
            return {
                ...state,
                [action.id]: {
                    ...defaultElements[action.elementType],
                    ...state[action.id],
                    ...action.element
                }
            }
        default:
            return state;
     }
 }

 export default kitReducers