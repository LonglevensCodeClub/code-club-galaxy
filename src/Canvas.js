import React, { Component } from 'react'
import { connect } from 'react-redux'

import renderFunctions from './renderFunctions'

const NO_FOCUS = -1

class Canvas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focusGalaxy: NO_FOCUS
        }
    }

    keyPressed(event){
        let focusGalaxy = NO_FOCUS

        const numberGalaxies = Object.keys(this.props.galaxies).length

        switch(event.keyCode) {
            case 37: { // left arrow
                focusGalaxy = (this.state.focusGalaxy + numberGalaxies - 1) % numberGalaxies
                break;
            }
            case 39: { // right arrow
                focusGalaxy = (this.state.focusGalaxy + 1) % numberGalaxies
                break;
            }
            default: {
                focusGalaxy = NO_FOCUS
            }
        }

        this.setState({ focusGalaxy })
    }
    componentDidMount(){
        document.addEventListener("keydown", this.keyPressed.bind(this), false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyPressed.bind(this), false);
    }
    
    renderElements (galaxyId) {
        return Object
            .values(this.props.elements)
            .filter(e => e.galaxyId === galaxyId)
            .map(e => renderFunctions[e.elementType](e))
    }

    renderGalaxies() {
        const galaxyWidth = 210

        let scale = 1
        if (this.state.focusGalaxy > NO_FOCUS) {
            scale = 3
        }

        return Object.values(this.props.galaxies)
            .filter(galaxy => (this.state.focusGalaxy === NO_FOCUS)
                                || (this.state.focusGalaxy === galaxy.id))
            .map(galaxy => (
                <g key={galaxy.id} transform={`translate(${galaxy.id * galaxyWidth}, 0) scale(${scale})`}>
                    {this.renderElements(galaxy.id)}
                    <text
                        fontFamily="Verdana" 
                        fontSize="30" 
                        fill={galaxy.textColour}
                        textAnchor='middle'
                        x={galaxyWidth / 2}
                        y={30}
                        >
                        {galaxy.name}
                    </text>
                </g>
            ))
    }

    render (props) {
        return (
            <svg width='100%' height='100%'>
                <rect x='0' y='0' width='100%' height='100%' fill='black' />
                {this.renderGalaxies()}
            </svg>
        )
    }
}
export default connect((state) => ({
    elements: state.elements,
    galaxies: state.galaxies
}), null)(Canvas)