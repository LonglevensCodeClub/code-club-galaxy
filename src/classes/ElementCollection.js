class ElementCollection {
    constructor() {
        this.elements = []
    }

    add(element) {
        this.elements.push(element)
        return element
    }
}

export default ElementCollection