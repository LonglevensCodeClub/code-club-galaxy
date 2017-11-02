import React from 'react'

export default (element) => (
    <g key={element.id}>
        <circle
            r={element.radius} 
            cx={element.positionX} 
            cy={element.positionY}
            fill={element.colour}/> 
    </g>
)
