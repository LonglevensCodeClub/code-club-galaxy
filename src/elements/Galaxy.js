import Planet from './Planet'
import Sun from './Planet'
import Star from './Star'
import Rocket from './Rocket'

const Elements = {
    Planet,
    Star,
    Rocket,
    Sun
}

let nextId = 0

class Galaxy {
    constructor() {
        this.id = nextId
        nextId += 1

        this.elements = []

        this.state = {
            id: this.id,
            name: `Galaxy ${this.id + 1}`,
            textColour: 'white'
        }

        // Create the functions like newPlanet, newStar etc,
        // They all have the same structure, assuming each class is constructed with an object of user properties
        Object.keys(Elements).forEach(elementName => {
            this[`new${elementName}`] = (userProps) => {
                const element = new Elements[elementName](this.id, userProps)
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

export default Galaxy