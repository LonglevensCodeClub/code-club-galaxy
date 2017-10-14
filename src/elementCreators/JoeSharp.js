import Galaxy from '../elements'

export default () => {
    // Create a sun
    const sun = new Galaxy.Planet({
        textColour: 'lightgreen',
        name: 'Joe'
    })

    // Create a planet, put it into the sun orbit
    const planet1 = new Galaxy.Planet({
        colour: 'red'
    })
    planet1.orbit(sun, {
        orbitFrequency: 0.05
    })

    // Create a planet, put it into the sun orbit
    const planet2 = new Galaxy.Planet({
        colour: 'orange'
    })
    planet2.orbit(sun, {
        orbitFrequency: 0.05,
        phase: Math.PI / 4
    })

    // Create a Rocket to go between each planet, stopping at the sun each time
    const rocket1 = new Galaxy.Rocket({
        colour: 'blue'
    })
    rocket1.flyBetween([planet1, sun, planet2, sun])
    
    const star = new Galaxy.Star({
        rate: 2,
        positionX: 600,
        positionY: 200
    })

    // These attributes will be used in the animation
    let radiusAdjust = 0
    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    let colourIndex = 0

    setInterval(() => {
        let radius = 30 + radiusAdjust
        sun.setRadius(radius)
        radiusAdjust += 2
        radiusAdjust %= 10

        let colour = colours[colourIndex]
        sun.setColour(colour)
        colourIndex += 1
        colourIndex %= (colours.length)
    }, 100)

    // Return all the elements we wish to be displayed
    return [
        sun,
        planet1,
        planet2,
        star,
        rocket1,
    ]
}

