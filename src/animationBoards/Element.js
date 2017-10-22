import Orbit from '../animators/Orbit'
import Pulse from '../animators/Pulse'
import FlyBetween from '../animators/FlyBetween'

let nextId = 0

const defaultProps = {
    positionX: 130,
    positionY: 130,
    colour: 'white'
}

class Element {
    constructor(elementType, tileId, childDefaultProps, userProps) {
        this.elementType = elementType
        this.tileId = tileId
        this.id = nextId
        nextId += 1
        
        this.state = {
            elementType: this.elementType,
            id: this.id,
            tileId
        }

        // This must be set for our element
        this.setProp('elementType', elementType)

        this.setProps({
            ...defaultProps,
            ...childDefaultProps,
            ...userProps
        })

        this.animators = []
    }

    addAnimator(animator) {
        this.animators.push(animator)
    }

    /**
     * Generic setter for multiple properties.
     * 
     * @param {object} values The new values to add to our existing properties 
     */
    setProps(values) {
        this.state = {
            ...this.state,
            ...values
        }
    }

    /**
     * Generic getter for all props, can be used with destructuring
     */
    getProps() {
        return this.state
    }

    /**
     * Generic getter for any property
     */
    getProp(key) {
        return this.state[key]
    }

    /**
     * Generic setter for any property, adds the property to this.state.
     * 
     * @param {string} key 
     * @param {*} value 
     */
    setProp(key, value) {
        this.state[key] = value
    }

    /**
     * Sets the position in a single function call
     * 
     * @param {number} x The x coordinate
     * @param {number} y The y coordinate
     */
    setPosition(x, y) {
        this.setPositionX(x)
        this.setPositionY(y)
    }
    
    /**
     * Set the position of the element in the x-plane
     * This will be interpreted according to the specific render function
     * 
     * @param {number} value The horizontal position of the element
     */
    setPositionX(value) {
        this.setProp('positionX', value)
    }

    /**
     * Set the position of the element in the y-plane
     * This will be interpreted according to the specific render function
     * 
     * @param {number} value The vertical position of the element
     */
    setPositionY(value) {
        this.setProp('positionY', value)
    }
    
    /**
     * Set the main colour of the element,
     * This will be interpreted according to the specific render function
     * 
     * @param {string} value The CSS colour to use on the main element 
     */
    setColour(value) {
        this.setProp('colour', value)
    }
    
    /**
     * Animation Functions
     */
    orbit(centre, config) {
        this.addAnimator(new Orbit(this, centre, config))
        return this
    }

    flyBetween(waypoints, config) {
        this.addAnimator(new FlyBetween(this, waypoints, config))
        return this;
    }

    pulse(config) {
        this.addAnimator(new Pulse(this, config))
        return this;
    }
}

export default Element