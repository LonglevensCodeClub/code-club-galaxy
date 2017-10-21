import React from 'react'

export default (element) => (
    <rect
        key={element.id}
        width={element.width} 
        height={element.height} 
        x={element.positionX} 
        y={element.positionY}
        fill={element.colour}/> 
)