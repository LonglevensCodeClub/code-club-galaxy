let nextId = 0

class Tile {
    constructor(ElementClasses) {
        this.id = nextId
        nextId += 1

        this.elements = []

        this.state = {
            id: this.id,
            name: `Tile ${this.id + 1}`,
            textColour: 'white'
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