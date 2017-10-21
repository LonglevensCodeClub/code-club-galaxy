import Element from './../../Element'

class Orbit extends Element {
    constructor(tileId, centreElement, satellite, userProps) {
        super('orbit', tileId, {
            radiusX: 80,
            radiusY: 60,
            orbitFrequency: 0.1, 
            phase: Math.random() * 2 * Math.PI,
            colour: 'rgba(255, 255, 255, 0.2)'
        }, userProps)

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
        if (this.centreElement) {
            this.setPositionX(this.centreElement.state.positionX)
            this.setPositionY(this.centreElement.state.positionY)
        }

        const angle = 2 * Math.PI * this.state.orbitFrequency * new Date().getTime() / 1000;
        const xPosition = this.state.radiusX * Math.sin(angle + this.state.phase);
        const yPosition = this.state.radiusY * Math.cos(angle + this.state.phase);
        let satelliteX = this.state.positionX + xPosition
        let satelliteY = this.state.positionY + yPosition
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
    setOrbitFrequency(value) {
        this.setProp('orbitFrequency', value)
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