
export default (galaxy) => {
    // Create a sun
    const sun = galaxy.newPlanet({
        name: 'Kate',
        textColour: 'red',
        colour: 'goldenrod',
        radius: 20
    })

    // Create a planet
    const planet = galaxy.newPlanet({
        colour: 'DarkTurquoise'
    })

    // Put the planet into the suns orbit
    planet.orbit(sun, {
        radius: 70,
        orbitFrequency: 0.1
    })

    // Create a moon
    const moon = galaxy.newPlanet({
        radius: 5,
        colour: 'grey'
    })

    // Put the moon into the moonOrbit
    moon.orbit(planet, {
        orbitFrequency: 0.3,
        radiusX: 20,
        radiusY: 20,
        colour: 'none'
    })

    // Return all the elements we wish to be displayed
    return [
        sun,
        planet,
        moon
    ]
}
