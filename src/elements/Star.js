import Element from './Element'

const defaultProps = {
    baseSize: 5,
    size: 5,
    rate: 1
}

class Star extends Element {
    constructor(galaxyId, userProps) {
        super('star', galaxyId, defaultProps, userProps)
    }
    
    /**
     * Set the twinkle rate
     * 
     * @param {number} value The speed of the twinkle 
     */
    setRate(value) {
        this.setProp('rate', value)
    }

    /**
     * Set the middle size of the star
     * 
     * @param {number} value The base size for the star, it will twinkle around this value 
     */
    setBaseSize(value) {
        this.setProp('baseSize', value)
    }

    /**
     * Updates the size of the star to give a twinkle effect
     * 
     * @param {number} time The current time
     */
    updateFrame(time) {
        let size = this.state.baseSize + Math.abs(((time / (1000 / this.state.rate)) % 10) - 5)
        
        this.setProp('size', size)
    }
}

export default Star