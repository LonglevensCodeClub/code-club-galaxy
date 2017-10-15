import React from 'react'

export default (element) => (
    <g key={element.id} transform={`translate(${element.positionX}, ${element.positionY})`}>
        <circle
            r={element.radius} 
            cx={0} 
            cy={0}
            fill={element.colour}/> 
    </g>
)