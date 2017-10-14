export const UPDATE_ELEMENT = "UPDATE_ELEMENT"

export const updateElement = (elementState) => ({
    type: UPDATE_ELEMENT,
    elementState
})

export const ADD_GALAXY = "ADD_GALAXY"

export const addGalaxy = (galaxyId) => ({
    type: ADD_GALAXY,
    galaxyId
})