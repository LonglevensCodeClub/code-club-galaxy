import Element from './Element'
import Orbit from './Orbit'

const defaultProps = {
    radius: 10
}

class Planet extends Element {
    constructor(galaxyId, userProps) {
        super('planet', galaxyId, defaultProps, userProps)
    }

    /**
     * Set the size of the planet
     * 
     * @param {number} value The radius of the planet 
     */
    setRadius(value) {
        this.setProp('radius', value)
    }

    orbit(centre, config) {
        const orbit = new Orbit(this.galaxyId, centre, this, config)
        this.addChild(orbit)
        return this
    }
}

export default Planet