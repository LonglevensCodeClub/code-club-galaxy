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
        const galaxyWidth = 210
        return Object.values(props.galaxies)
            .map(g => (
                <g key={g.id} transform={`translate(${g.id * galaxyWidth}, 0)`}>
                    {renderElements(g.id)}
                    <text
                        fontFamily="Verdana" 
                        fontSize="30" 
                        fill={g.textColour}
                        textAnchor='middle'
                        x={galaxyWidth / 2}
                        y={30}
                        >
                        {g.name}
                    </text>
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