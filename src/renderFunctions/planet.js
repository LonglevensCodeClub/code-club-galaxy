import React from 'react'

export default (id, element) => (
    <g key={id} transform={`translate(${element.positionX}, ${element.positionY})`}>
        <circle
            r={element.radius} 
            cx={0} 
            cy={0}
            fill={element.colour}/> 
        <text
            fontFamily="Verdana" 
            fontSize="35" 
            fill={element.textColour}
            textAnchor='left'
            y={30}
            >
            {element.name}
        </text>
    </g>
)