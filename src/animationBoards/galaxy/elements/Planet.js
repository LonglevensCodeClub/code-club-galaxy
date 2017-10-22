import Element from './../../Element'

const defaultProps = {
    radius: 10
}

class Planet extends Element {
    constructor(tileId, userProps) {
        super('planet', tileId, defaultProps, userProps)
    }

    /**
     * Set the size of the planet
     * 
     * @param {number} value The radius of the planet 
     */
    setRadius(value) {
        this.setProp('radius', value)
    }
}

export default Planet