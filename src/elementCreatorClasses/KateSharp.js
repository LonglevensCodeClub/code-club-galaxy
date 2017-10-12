import ElementCreator from './ElementCreator'

import Planet from '../classes/Planet'
import Orbit from '../classes/Orbit'

class KateSharp extends ElementCreator {
    createElements() {
        this.planet = new Planet()

        this.planet.setName('Kate')
        this.planet.setColour('DarkTurquoise')

        this.orbit = new Orbit()
        this.orbit.setName('Elliptical Orbit')
        this.orbit.setTextColour('red')
        this.orbit.setPositionX(600)
        this.orbit.setPositionY(400)
        this.orbit.setRadiusX(200)
        this.orbit.addPlanet(this.planet, {
            orbitFrequency: 0.1
        })

        // Return all the elements we wish to be displayed
        return [
            this.orbit,
            this.planet
        ]
    }

    animateFrame(timeNow) {

    }
}

export default KateSharp