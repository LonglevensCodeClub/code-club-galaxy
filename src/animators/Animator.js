let nextId = 0

class Animator {
    constructor(defaultProps, userProps) {
        this.id = nextId
        nextId += 1
        
        this.setProps({
            ...defaultProps,
            ...userProps
        })
    }

    /**
     * Generic setter for multiple properties.
     * 
     * @param {object} values The new values to add to our existing properties 
     */
    setProps(values) {
        this.props = {
            ...this.props,
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
        this.props[key] = value
    }
    
    /**
     * Generic getter for all props, can be used with destructuring
     */
    getProps() {
        return this.props
    }

    /**
     * Generic getter for any property
     */
    getProp(key) {
        return this.props[key]
    }
}

export default Animator