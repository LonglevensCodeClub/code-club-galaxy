import React from 'react'

export default (element) => (
    <g key={element.id}>
        <defs>
            <radialGradient id={`grad${element.id}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor: 'white', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: element.colour, stopOpacity:1}} />
            </radialGradient>
        </defs>
        <circle
            r={element.radius} 
            cx={element.positionX} 
            cy={element.positionY}
            fill={`url(#grad${element.id})`}/> 
    </g>
)