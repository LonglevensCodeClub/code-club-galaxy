import Element from '../element'

class Planet extends Element {
    constructor(store) {
        super(store, 'planet')
    }

    setPositionX(value) {
        this.setProp('positionX', value)
    }

    setPositionY(value) {
        this.setProp('positionY', value)
    }

    setRadius(value) {
        this.setProp('radius', value)
    }

    setColour(value) {
        this.setProp('colour', value)
    }

    setTextColour(value) {
        this.setProp('textcolour', value)
    }
}

export const defaultPlanet = {
    radius: 10,
    positionX: 200,
    positionY: 200,
    colour: 'green',
    textColour: 'white'
}

export default Planet