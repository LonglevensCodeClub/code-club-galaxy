import React from 'react'

export default (element) => (
    <g key={element.id} transform={`translate(${element.positionX}, ${element.positionY}) scale(${0.05 * element.size})`}>
        <polygon points="0,-10 15,30 -20,5 20,5 -15,30"
            fill={element.colour}
            stroke={element.colour}
            fillRule="nonzero"
            />
    </g>
)