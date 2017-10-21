import React from 'react'

export default (element) => (
    <circle
        key={element.id}
        r={element.radius} 
        cx={element.positionX} 
        cy={element.positionY}
        fill={element.colour}/> 
)