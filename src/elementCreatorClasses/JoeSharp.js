import ElementCreator from './ElementCreator'

import Planet from '../classes/Planet'
import Orbit from '../classes/Orbit'

class JoeSharp extends ElementCreator {
    createElements() {
        this.planet = new Planet()
        this.planet.setName('Joe')
        this.planet.setTextColour('lightgreen')
        
        this.orbit = new Orbit()
        this.orbit.addPlanet(this.planet, {
            orbitFrequency: 0.2
        })
        
        // These attributes will be used in the animation
        this.radiusAdjust = 0
        this.colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
        this.colourIndex = 0

        // Return all the elements we wish to be displayed
        return [
            this.orbit,
            this.planet
        ]
    }

    animateFrame(timeNow) {
        let radius = 30 + this.radiusAdjust
        this.planet.setRadius(radius)
        this.radiusAdjust += 2
        this.radiusAdjust %= 10

        let colour = this.colours[this.colourIndex]
        this.planet.setColour(colour)
        this.colourIndex += 1
        this.colourIndex %= (this.colours.length)
    }
}

export default JoeSharp