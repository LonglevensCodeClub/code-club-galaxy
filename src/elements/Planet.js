import Element from './Element'
import Orbit from './Orbit'

const defaultProps = {
    radius: 10
}

class Planet extends Element {
    constructor(userProps) {
        super('planet', defaultProps, userProps)
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
        const orbit = new Orbit(centre, this, config)
        this.addChild(orbit)
    }
}

export default Planet