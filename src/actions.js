export const UPDATE_PLANET = "UPDATE_PLANET"

export const updatePlanet = (name, planet) => ({
    type: UPDATE_PLANET,
    name,
    planet
})