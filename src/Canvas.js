import React from 'react'
import { connect } from 'react-redux'

import renderFunctions from './renderFunctions'

const Canvas = (props) => {

    const renderElements = () => {
        return Object
            .entries(props.elements)
            .map(([id, element]) => renderFunctions[element.elementType](id, element))
    }

    return (
        <svg width='100%' height='100%'>
            <rect x='0' y='0' width='100%' height='100%' fill='black' />
            {renderElements()}
        </svg>
    )
}

export default connect((state) => ({
    elements: state
}), null)(Canvas)