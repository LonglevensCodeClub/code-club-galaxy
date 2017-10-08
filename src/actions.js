export const UPDATE_ELEMENT = "UPDATE_ELEMENT"

export const updateElement = (id, elementType, element) => ({
    type: UPDATE_ELEMENT,
    id,
    elementType,
    element
})