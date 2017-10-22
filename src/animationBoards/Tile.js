let nextId = 0

const defaultProps = {
    textColour: 'white',
    backgroundColour: 'black'
}

class Tile {
    constructor(ElementClasses, userProps) {
        this.id = nextId
        nextId += 1

        this.elements = []

        this.state = {
            ...defaultProps,
            ...userProps,
            id: this.id,
            name: `Tile ${this.id + 1}`,
        }

        // Create the functions like newPlanet, newStar etc,
        // They all have the same structure, assuming each class is constructed with an object of user properties
        Object.keys(ElementClasses).forEach(elementName => {
            this[`new${elementName}`] = (userProps) => {
                const element = new ElementClasses[elementName](this.id, userProps)
                this.elements.push(element)
                return element
            }
        })
    }
    
    /**
     * Set the name of the element for display
     * 
     * @param {string} name The new name of the galaxy
     */
    setName(name) {
        this.state.name = name
    }
}

export default Tile