import Element from './Element'

class Planet extends Element {
    constructor() {
        super('planet')

        this.setProps({
            radius: 10,
            positionX: 200,
            positionY: 200,
            colour: 'green',
            textColour: 'white'
        })
    }

    setRadius(value) {
        this.setProp('radius', value)
    }
}

export default Planet