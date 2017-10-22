import Element from './../../Element'

const defaultProps = {
    size: 5,
    speed: 4,
    travelAngle: 0
}

class Rocket extends Element {
    constructor(tileId, userProps) {
        super('rocket', tileId, defaultProps, userProps)
    }

    /**
     * Set the size of the rocket
     * 
     * @param {number} value The base size for the star, it will twinkle around this value 
     */
    setSize(value) {
        this.setProp('size', value)
    }
}

export default Rocket