import ElementCreator from './ElementCreator'

import Planet from '../classes/Planet'
import Orbit from '../classes/Orbit'

class KateSharp extends ElementCreator {
    createElements() {
        // Create a sun
        this.sun = new Planet()
        this.sun.setName('Kate')
        this.sun.setTextColour('red')
        this.sun.setColour('goldenrod')
        this.sun.setPositionX(600)
        this.sun.setPositionY(400)
        this.sun.setRadius(40)

        // Create an orbit around the sun
        this.sunOrbit = new Orbit(this.sun)
        this.sunOrbit.setRadiusX(200)

        // Create a planet
        this.planet = new Planet()
        this.planet.setColour('DarkTurquoise')

        // Put the planet into the suns orbit
        this.sunOrbit.addSatellite(this.planet, {
            orbitFrequency: 0.1
        })

        // Create an orbit around the planet
        this.planetOrbit = new Orbit(this.planet)
        this.planetOrbit.setColour('none')
        this.planetOrbit.setRadius(20)

        // Create a moon
        this.moon = new Planet()
        this.moon.setRadius(5)
        this.moon.setColour('grey')

        // Put the moon into the moonOrbit
        this.planetOrbit.addSatellite(this.moon, {
            orbitFrequency: 0.3
        })

        // Return all the elements we wish to be displayed
        return [
            this.sun,
            this.sunOrbit,
            this.planet,
            this.planetOrbit,
            this.moon
        ]
    }

    animateFrame(timeNow) {

    }
}

export default KateSharp