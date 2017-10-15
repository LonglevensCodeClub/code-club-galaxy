
export default (galaxy) => {
    galaxy.setName('Joe')

    // Create a sun
    const sun = galaxy.newSun({})

    // Create a planet, put it into the sun orbit
    const planet1 = galaxy.newPlanet({
        colour: 'red',
        radius: 5
    })
    planet1.orbit(sun, {
        orbitFrequency: 0.05,
        phase: 0
    })

    // Create a planet, put it into the sun orbit
    const planet2 = galaxy.newPlanet({
        colour: 'orange'
    })
    planet2.orbit(sun, {
        orbitFrequency: 0.05,
        phase: Math.PI
    })

    // Create a Rocket to go between each planet, stopping at the sun each time
    const rocket1 = galaxy.newRocket({
        colour: 'blue'
    })
    rocket1.flyBetween([planet1, planet2])

    // These attributes will be used in the animation
    let radiusAdjust = 0
    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    let colourIndex = 0

    setInterval(() => {
        let radius = 10 + radiusAdjust
        sun.setRadius(radius)
        radiusAdjust += 1
        radiusAdjust %= 5

        let colour = colours[colourIndex]
        sun.setColour(colour)
        colourIndex += 1
        colourIndex %= (colours.length)
    }, 100)
}

