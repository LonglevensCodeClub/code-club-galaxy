import { UPDATE_ELEMENT } from './actions'

const defaultState = {}

const kitReducers = (
    state = defaultState,
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

 export default kitReducers