let nextId = 0

class Element {
    constructor(elementType) {
        this.elementType = elementType
        this.id = `${this.elementType}-${nextId}`
        nextId += 1
        
        this.state = {
            elementType: this.elementType,
            id: this.id
        }

        // This must be set for our element
        this.setProp('elementType', elementType)

        this.setProps({
            positionX: 200,
            positionY: 200,
            colour: 'white',
            textColour: 'white'
        })
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
     * Set the name of the element for display
     * 
     * @param {string} name The new name of the element
     */
    setName(name) {
        this.setProp('name', name)
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
     * The default colour for any text on the element
     * 
     * @param {string} value The CSS colour to use on any text 
     */
    setTextColour(value) {
        this.setProp('textColour', value)
    }
}

export default Element