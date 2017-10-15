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
    </g>
)