import { updateElement } from '../actions'

let nextId = 0

class Element {
    constructor(store, elementType) {
        this.store = store
        this.elementType = elementType
        this.id = `${this.elementType}-${nextId}`
        nextId += 1

        // This must be set for our element
        this.setProp('elementType', elementType)
    }

    setProp(key, value) {
        this.store.dispatch(updateElement(this.id, this.elementType, {
            [key]: value
        }))
    }

    setName(name) {
        this.setProp('name', name)
    }
}

export default Element