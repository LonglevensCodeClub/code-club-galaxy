import Element from './../../Element'

const defaultProps = {
    width: 10,
    height: 10
}

class Rectangle extends Element {
    constructor(tileId, userProps) {
        super('rectangle', tileId, defaultProps, userProps)
    }

    /**
     * Set the width of the rectangle
     * 
     * @param {number} value The width of the rectangle 
     */
    setWidth(value) {
        this.setProp('width', value)
    }
    
    /**
     * Set the height of the rectangle
     * 
     * @param {number} value The height of the rectangle 
     */
    setHeight(value) {
        this.setProp('height', value)
    }
}

export default Rectangle