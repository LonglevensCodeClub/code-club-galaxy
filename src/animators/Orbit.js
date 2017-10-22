import Animator from './Animator'

const generateDefaultProps = () => ({
    radiusX: 80,
    radiusY: 60,
    frequency: 0.1, 
    phase: Math.random() * 2 * Math.PI
})

class Orbit extends Animator {
    constructor(satellite, centreElement, userProps) {
        super(generateDefaultProps(), userProps)


        this.centreElement = centreElement
        this.satellite = satellite
        
        if (!!userProps && userProps.radius) {
            this.setRadius(userProps.radius)
        }
    }
    
    /**
     * Updates the position of all the satellites so they travel around the orbit
     * 
     * @param {number} time The current time
     */
    updateFrame(time) {
        // Track our centre element
        const angle = 2 * Math.PI * this.props.frequency * new Date().getTime() / 1000;
        const xPosition = this.props.radiusX * Math.cos(angle + this.props.phase);
        const yPosition = this.props.radiusY * Math.sin(angle + this.props.phase);
        let satelliteX = this.centreElement.state.positionX + xPosition
        let satelliteY = this.centreElement.state.positionY + yPosition
        this.satellite.setPositionX(satelliteX)
        this.satellite.setPositionY(satelliteY)
    }

    /**
     * Set the X Radius
     * 
     * @param {number} value The horizontal radius of the orbit
     */
    setRadiusX(value) {
        this.setProp('radiusX', value)
    }
        
    /**
     * Set the Y Radius
     * 
     * @param {number} value The vertical radius of the orbit
     */
    setRadiusY(value) {
        this.setProp('radiusY', value)
    }

    /**
     * Set a circular radius
     * 
     * @param {number} value The radius 
     */
    setRadius(value) {
        this.setRadiusX(value)
        this.setRadiusY(value)
    }
    
    /**
     * Set the speed of the orbit
     * 
     * @param {number} value The frequency of the rotation
     */
    setFrequency(value) {
        this.setProp('frequency', value)
    }

    /**
     * Set the phase of the orbit, used to have multiple planets at the same distance
     * but not clash
     * 
     * @param {number} value The phase in radians
     */
    setPhase(value) {
        this.setProp('phase', value)
    }
}

export default Orbit