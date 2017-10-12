import Element from './Element'

class Orbit extends Element {
    constructor(centreElement) {
        super('orbit')

        this.centreElement = centreElement
        this.satellites = []

        this.setProps({
            radiusX: 100,
            radiusY: 80
        })
    }
    
    /**
     * Updates the position of all the satellites so they travel around the orbit
     * 
     * @param {number} time The current time
     */
    updateFrame(time) {
        this.satellites.forEach(satellite => {
            // Track our centre element
            if (this.centreElement) {
                this.setPositionX(this.centreElement.state.positionX)
                this.setPositionY(this.centreElement.state.positionY)
            }

            const angle = 2 * Math.PI * satellite.orbitFrequency * new Date().getTime() / 1000;
            const xPosition = this.state.radiusX * Math.sin(angle + satellite.phase);
            const yPosition = this.state.radiusY * Math.cos(angle + satellite.phase);
            let satelliteX = this.state.positionX + xPosition
            let satelliteY = this.state.positionY + yPosition
            satellite.setPositionX(satelliteX)
            satellite.setPositionY(satelliteY)
        })
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
     * Put a satellite into the orbit
     * 
     * @param {Element} satellite The element to put into orbit to add
     * @param {object} userConfig The phase and orbitalFrequency of the satellite
     */
    addSatellite(satellite, userConfig) {
        const defaultConfig = {
            orbitFrequency: 1.0, 
            phase: 0.0
        }

        const config = {
            ...defaultConfig,
            ...userConfig
        }

        satellite.orbitFrequency = config.orbitFrequency
        satellite.phase = config.phase
        this.satellites.push(satellite)
    }
}

export default Orbit