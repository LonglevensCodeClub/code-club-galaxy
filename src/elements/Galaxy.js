import Planet from './Planet'
import Star from './Star'
import Rocket from './Rocket'

const Elements = {
    Planet,
    Star,
    Rocket
}

let nextId = 0

class Galaxy {
    constructor() {
        this.id = nextId
        nextId += 1

        this.elements = []

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
}

export default Galaxy