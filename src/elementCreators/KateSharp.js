import Planet from '../classes/Planet'
import Orbit from '../classes/Orbit'

export default () => {
    // Create a sun
    const sun = new Planet()
    sun.setName('Kate')
    sun.setTextColour('red')
    sun.setColour('goldenrod')
    sun.setPositionX(600)
    sun.setPositionY(400)
    sun.setRadius(40)

    // Create an orbit around the sun
    const sunOrbit = new Orbit(sun)
    sunOrbit.setRadiusX(200)

    // Create a planet
    const planet = new Planet()
    planet.setColour('DarkTurquoise')

    // Put the planet into the suns orbit
    sunOrbit.addSatellite(planet, {
        orbitFrequency: 0.1
    })

    // Create an orbit around the planet
    const planetOrbit = new Orbit(planet)
    planetOrbit.setColour('none')
    planetOrbit.setRadius(20)

    // Create a moon
    const moon = new Planet()
    moon.setRadius(5)
    moon.setColour('grey')

    // Put the moon into the moonOrbit
    planetOrbit.addSatellite(moon, {
        orbitFrequency: 0.3
    })

    // Return all the elements we wish to be displayed
    return [
        sun,
        sunOrbit,
        planet,
        planetOrbit,
        moon
    ]
}
