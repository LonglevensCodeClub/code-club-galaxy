import Planet from '../classes/Planet'
import Orbit from '../classes/Orbit'
import Star from '../classes/Star'
import Rocket from '../classes/Rocket'

export default () => {
    // Create a sun
    const sun = new Planet()
    sun.setTextColour('lightgreen')
    sun.setName('Joe')

    const sunOrbit1 = new Orbit(sun)

    // Create a planet, put it into the sun orbit
    const planet1 = new Planet()
    planet1.setColour('red')
    sunOrbit1.addSatellite(planet1, {
        orbitFrequency: 0.05
    })
    
    const sunOrbit2 = new Orbit(sun)
    sunOrbit2.setRadius(140)

    // Create a planet, put it into the sun orbit
    const  planet2 = new Planet()
    planet2.setColour('orange')
    sunOrbit2.addSatellite(planet2, {
        orbitFrequency: 0.05
    })

    const planet3 = new Planet()
    planet3.setColour('maroon')
    sunOrbit2.addSatellite(planet3, {
        orbitFrequency: 0.05,
        phase: Math.PI / 4
    })

    // Create a Rocket to go between each planet, stopping at the sun each time
    const rocket1 = new Rocket()
    rocket1.flyBetween([planet1, sun, planet2, sun, planet3, sun])
    rocket1.setColour('blue')
    
    const star = new Star()
    star.setRate(2)
    star.setPositionX(600)
    star.setPositionY(200)

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
        sunOrbit1,
        planet1,
        sunOrbit2,
        planet2,
        planet3,
        star,
        rocket1,
    ]
}

