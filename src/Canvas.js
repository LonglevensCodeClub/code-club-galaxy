import React, { Component } from 'react'
import { connect } from 'react-redux'

import animationBoards from './animationBoards'
import { getWidth, getHeight } from './utils'

import './canvas.css';

const NO_FOCUS = -1
const NO_FILTER = null

class Canvas extends Component {
    constructor(props) {
        super(props)

        this.first = true
        this.state = {
            focusTile: NO_FOCUS,
            filter: NO_FILTER
        }
    }

    keyPressed(event){
        let focusTile = this.state.focusTile
        let filter = this.state.filter

        const visibleTileIds = Object.keys(this.props.tiles)
            .filter(tile => (filter === NO_FILTER)
                        || (this.props.tiles[tile].tileType === filter))
            .map(tileId => parseInt(tileId, 10)) // keys are taken as strings
        const visibleIndexOf = visibleTileIds.indexOf(focusTile)

        switch(event.keyCode) {
            case 38: { // up arrow
                filter = 'galaxy'
                focusTile = NO_FOCUS
                break;
            }
            case 40: { // down arrow
                filter = 'geometry'
                focusTile = NO_FOCUS
                break;
            }
            case 37: { // left arrow
                focusTile = visibleTileIds[(visibleIndexOf - 1 + visibleTileIds.length) % visibleTileIds.length]
                break;
            }
            case 39: { // right arrow
                focusTile = visibleTileIds[(visibleIndexOf + 1) % visibleTileIds.length]
                break;
            }
            default: {
                focusTile = NO_FOCUS
                filter = NO_FILTER
            }
        }

        this.setState({ focusTile, filter })
    }
    componentDidMount(){
        document.addEventListener("keydown", this.keyPressed.bind(this), false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyPressed.bind(this), false);
    }

    renderElements (tileId) {
        return Object
            .values(this.props.elements)
            .filter(e => e.tileId === tileId)
            .map(e => animationBoards[e.tileType].renderFunctions[e.elementType](e))
    }

    renderTiles() {
        const smallerDim = Math.min(getWidth(), (getHeight() - 150)) // fiddle factor for app header

        let dimension = '200px'
        let transform = ''
        if (this.state.focusTile > NO_FOCUS) {
            dimension = `${smallerDim}px`
            let scale = smallerDim / 250
            transform = `scale(${scale})`
        } else {
            transform = `scale(0.8)`
        }

        return Object.values(this.props.tiles)
            .filter(tile => (this.state.focusTile === NO_FOCUS)
                                || (this.state.focusTile === tile.id))
            .filter(tile => (this.state.filter === NO_FILTER)
                                || (this.state.filter === tile.tileType))
            .map(tile => (
                <svg key={tile.id} width={dimension} height={dimension}>
                    <rect width="100%" height="100%" fill={tile.backgroundColour} />
                    <g transform={transform}>
                        {this.renderElements(tile.id)}
                        <text
                            fontFamily="Helvetica" 
                            fontSize="24" 
                            fill={tile.textColour}
                            textAnchor='left'
                            x={20}
                            y={30}
                            >
                            {tile.name}
                        </text>
                    </g>
                </svg>
            ))
    }

    render (props) {
        return (
            <div className='canvas'>
                <p className='meta fps'>{this.props.ui.fps} FPS</p>
                <p className='meta filter'>Filter: {this.state.filter}</p>
                <p className='meta focus'>Focus: {this.state.focusTile}</p>

                {this.renderTiles()}
            </div>
        )
    }
}
export default connect((state) => ({
    elements: state.elements,
    tiles: state.tiles,
    ui: state.ui
}), null)(Canvas)