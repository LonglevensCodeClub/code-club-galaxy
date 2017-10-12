import Element from './Element'

class Orbit extends Element {
    constructor() {
        super('orbit')

        this.planets = []

        this.setProps({
            radiusX: 100,
            radiusY: 80
        })
    }
    
    /**
     * Updates the position of all the planets so they travel around the orbit
     * 
     * @param {number} time The current time
     */
    updateFrame(time) {
        this.planets.forEach(planet => {
            const angle = 2 * Math.PI * planet.orbitFrequency * new Date().getTime() / 1000;
            const xPosition = this.state.radiusX * Math.sin(angle + planet.phase);
            const yPosition = this.state.radiusY * Math.cos(angle + planet.phase);
            let planetX = this.state.positionX + xPosition
            let planetY = this.state.positionY + yPosition
            planet.setPositionX(planetX)
            planet.setPositionY(planetY)
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
     * Put a planet into the orbit
     * 
     * @param {Planet} planet The planet to add
     * @param {object} userConfig The phase and orbitalFrequency of the planet
     */
    addPlanet(planet, userConfig) {
        const defaultConfig = {
            orbitFrequency: 1.0, 
            phase: 0.0
        }

        const config = {
            ...defaultConfig,
            ...userConfig
        }

        planet.orbitFrequency = config.orbitFrequency
        planet.phase = config.phase
        this.planets.push(planet)
    }
}

export default Orbit