import ElementCreator from './ElementCreator'

import Planet from '../classes/Planet'
import Orbit from '../classes/Orbit'
import Star from '../classes/Star'

class JoeSharp extends ElementCreator {
    createElements() {
        // Create a sun
        this.sun = new Planet()
        this.sun.setTextColour('lightgreen')
        this.sun.setName('Joe')

        this.sunOrbit = new Orbit(this.sun)

        // Create a planet, put it into the sun orbit
        this.planet = new Planet()
        this.planet.setColour('darkgreen')
        this.sunOrbit.addSatellite(this.planet, {
            orbitFrequency: 0.2
        })
        
        // These attributes will be used in the animation
        this.radiusAdjust = 0
        this.colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
        this.colourIndex = 0

        this.star = new Star()
        this.star.setRate(2)
        this.star.setPositionX(600)
        this.star.setPositionY(200)

        // Return all the elements we wish to be displayed
        return [
            this.sun,
            this.sunOrbit,
            this.planet,
            this.star
        ]
    }

    animateFrame(timeNow) {
        let radius = 30 + this.radiusAdjust
        this.sun.setRadius(radius)
        this.radiusAdjust += 2
        this.radiusAdjust %= 10

        let colour = this.colours[this.colourIndex]
        this.sun.setColour(colour)
        this.colourIndex += 1
        this.colourIndex %= (this.colours.length)
    }
}

export default JoeSharp