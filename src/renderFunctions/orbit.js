import React from 'react'

export default (element) => (
    <g key={element.id} transform={`translate(${element.positionX}, ${element.positionY})`}>
        <ellipse 
            rx={element.radiusX} 
            ry={element.radiusY} 
            cx={0} 
            cy={0}
            stroke={element.colour}
            fill="none"/> 
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