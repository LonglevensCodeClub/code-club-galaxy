import React from 'react'
import { connect } from 'react-redux'

const Canvas = (props) => {

    const renderItems = () => {
        return Object.entries(props.planets).map(([id, planet]) => {
            return (
                <g key={id} transform={`translate(${planet.positionX}, ${planet.positionY})`}>
                    <circle
                        r={planet.radius} 
                        cx={0} 
                        cy={0}
                        fill={planet.colour}/> 
                    <text fontFamily="Verdana" fontSize="35" fill={planet.textColour}>{id}</text>
                </g>
            )
        })
    }

    return (
        <svg width='100%' height='100%'>
            <rect x='0' y='0' width='100%' height='100%' fill='black' />
            {renderItems()}
        </svg>
    )
}

export default connect((state) => ({
    planets: state
}), null)(Canvas)