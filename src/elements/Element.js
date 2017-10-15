let nextId = 0

const defaultProps = {
    positionX: 100,
    positionY: 120,
    colour: 'white'
}

class Element {
    constructor(elementType, galaxyId, childDefaultProps, userProps) {
        this.elementType = elementType
        this.galaxyId = galaxyId
        this.id = nextId
        nextId += 1
        
        this.state = {
            elementType: this.elementType,
            id: this.id,
            galaxyId
        }

        // This must be set for our element
        this.setProp('elementType', elementType)

        this.setProps({
            ...defaultProps,
            ...childDefaultProps,
            ...userProps
        })

        this.children = []
    }

    addChild(child) {
        this.children.push(child)
    }

    /**
     * Called every frame to give the element the opportunity to animate it's elements.
     * 
     * @param {number} time The current time in milliseconds, passed in by the animator 
     */
    updateFrame(time) {

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
}

export default Element