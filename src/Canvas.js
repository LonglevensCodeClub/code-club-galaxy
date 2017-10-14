import React from 'react'
import { connect } from 'react-redux'

import renderFunctions from './renderFunctions'

const Canvas = (props) => {

    const renderElements = (galaxyId) => {
        return Object
            .values(props.elements)
            .filter(e => e.galaxyId === galaxyId)
            .map(e => renderFunctions[e.elementType](e))
    }

    const renderGalaxies = () => {
        return Object.values(props.galaxies)
            .map(g => (
                <g key={g.id} transform={`translate(${g.id * 210}, 0)`}>
                    {renderElements(g.id)}
                </g>
            ))
    }

    return (
        <svg width='100%' height='100%'>
            <rect x='0' y='0' width='100%' height='100%' fill='black' />
            {renderGalaxies()}
        </svg>
    )
}

export default connect((state) => ({
    elements: state.elements,
    galaxies: state.galaxies
}), null)(Canvas)