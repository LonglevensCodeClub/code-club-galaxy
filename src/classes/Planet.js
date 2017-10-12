import Element from './Element'

class Planet extends Element {
    constructor() {
        super('planet')

        this.setProps({
            radius: 10
        })
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