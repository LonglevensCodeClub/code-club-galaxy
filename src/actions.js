export const UPDATE_ELEMENTS = "UPDATE_ELEMENTS"

export const updateElements = (elements) => ({
    type: UPDATE_ELEMENTS,
    elements
})

export const ADD_GALAXY = "ADD_GALAXY"

export const addGalaxy = (galaxyState) => ({
    type: ADD_GALAXY,
    galaxyState
})

export const RECORD_FPS = "RECORD_FPS"

export const recordFps = (fps) => ({
    type: RECORD_FPS,
    fps
})