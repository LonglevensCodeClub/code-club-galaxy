import Galaxy from '../elements'

export default () => {
    // Create a sun
    const sun = new Galaxy.Planet({
        name: 'Kate',
        textColour: 'red',
        colour: 'goldenrod',
        positionX: 400,
        positionY: 300,
        radius: 20
    })

    // Create a planet
    const planet = new Galaxy.Planet({
        colour: 'DarkTurquoise'
    })

    // Put the planet into the suns orbit
    planet.orbit(sun, {
        radius: 100,
        orbitFrequency: 0.1
    })

    // Create a moon
    const moon = new Galaxy.Planet({
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
