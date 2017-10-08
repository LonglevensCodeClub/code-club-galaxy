import { UPDATE_PLANET } from './actions'

const defaultState = {}

const defaultPlanet = {
    radius: 10,
    positionX: 200,
    positionY: 200,
    colour: 'black',
    textColour: 'white'
}

const kitReducers = (
    state = defaultState,
    action
 ) => {
    switch (action.type) {
        case UPDATE_PLANET:
            return {
                ...state,
                [action.name]: {
                    ...defaultPlanet,
                    ...state[action.name],
                    ...action.planet
                }
            }
        default:
            return state;
     }
 }

 export default kitReducers