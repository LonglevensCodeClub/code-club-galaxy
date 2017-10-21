export const UPDATE_ELEMENTS = "UPDATE_ELEMENTS"

export const updateElements = (elements) => ({
    type: UPDATE_ELEMENTS,
    elements
})

export const ADD_TILE = "ADD_TILE"

export const addTile = (tileState) => ({
    type: ADD_TILE,
    tileState
})

export const RECORD_FPS = "RECORD_FPS"

export const recordFps = (fps) => ({
    type: RECORD_FPS,
    fps
})