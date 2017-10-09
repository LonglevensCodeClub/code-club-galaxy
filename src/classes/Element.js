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
    }

    setProps(values) {
        this.state = {
            ...this.state,
            ...values
        }
    }

    setProp(key, value) {
        this.state[key] = value
    }

    setName(name) {
        this.setProp('name', name)
    }
    
    setPositionX(value) {
        this.setProp('positionX', value)
    }

    setPositionY(value) {
        this.setProp('positionY', value)
    }
    
    setColour(value) {
        this.setProp('colour', value)
    }

    setTextColour(value) {
        this.setProp('textcolour', value)
    }
}

export default Element