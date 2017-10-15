import React, { Component } from 'react'
import { connect } from 'react-redux'

import renderFunctions from './renderFunctions'
import { getWidth, getHeight } from './utils'

import './canvas.css';

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
        const smallerDim = Math.min(getWidth(), (getHeight() - 150)) // fiddle factor for app header
        
        let dimension = '250px'
        let transform = ''
        if (this.state.focusGalaxy > NO_FOCUS) {
            dimension = `${smallerDim}px`
            let scale = smallerDim / 250
            transform = `scale(${scale})`
        }

        return Object.values(this.props.galaxies)
            .filter(galaxy => (this.state.focusGalaxy === NO_FOCUS)
                                || (this.state.focusGalaxy === galaxy.id))
            .map(galaxy => (
                <svg key={galaxy.id} width={dimension} height={dimension}>
                    <g transform={transform}>
                        {this.renderElements(galaxy.id)}
                        <text
                            fontFamily="Helvetica" 
                            fontSize="24" 
                            fill={galaxy.textColour}
                            textAnchor='left'
                            x={20}
                            y={30}
                            >
                            {galaxy.name}
                        </text>
                    </g>
                </svg>
            ))
    }

    render (props) {
        return (
            <div className='canvas'>
                {this.renderGalaxies()}
            </div>
        )
    }
}
export default connect((state) => ({
    elements: state.elements,
    galaxies: state.galaxies
}), null)(Canvas)