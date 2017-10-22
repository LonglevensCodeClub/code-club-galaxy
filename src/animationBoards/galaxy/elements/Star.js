import Element from './../../Element'

const defaultProps = {
    size: 3
}

class Star extends Element {
    constructor(tileId, userProps) {
        super('star', tileId, defaultProps, userProps)
    }
    
    /**
     * Set the twinkle rate
     * 
     * @param {number} value The speed of the twinkle 
     */
    setFrequency(value) {
        this.setProp('frequency', value)
    }

    /**
     * Set the middle size of the star
     * 
     * @param {number} value The base size for the star, it will twinkle around this value 
     */
    setSize(value) {
        this.setProp('size', value)
    }
}

export default Star