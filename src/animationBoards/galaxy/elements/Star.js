import Element from './../../Element'

const defaultProps = {
    baseSize: 1,
    sizeRange: 1,
    size: 3,
    frequency: 0.5,
    phase: 0
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
    setBaseSize(value) {
        this.setProp('baseSize', value)
    }

    /**
     * Updates the size of the star to give a twinkle effect
     * 
     * @param {number} time The current time
     */
    updateFrame(time) {
        const angle = 2 * Math.PI * this.state.frequency * new Date().getTime() / 1000;

        let size = this.state.baseSize + (this.state.sizeRange * Math.sin(angle + this.state.phase))
        
        this.setProp('size', size)
    }
}

export default Star