import React from 'react'

export default (element) => (
    <ellipse
        key={element.id} 
        rx={element.radiusX} 
        ry={element.radiusY} 
        cx={element.positionX} 
        cy={element.positionY}
        stroke={element.colour}
        fill="none"/> 
)