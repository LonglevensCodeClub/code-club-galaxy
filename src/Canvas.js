import React, { Component } from 'react'

class Canvas extends Component {

    renderItems() {
        return this.props.data.map((d, i) => {
            const spacing = 100
            const verticalPos = 150
            return (
                <circle key={i} r={d} cx={(1 + i) * spacing} cy={verticalPos}/> 
            )
        })
    }

    render() {
        return (
            <svg width='100%' height='100%'>
                <rect x='0' y='0' width='100%' height='100%' fill='green' />
                {this.renderItems()}
            </svg>
        )
    }
}

export default Canvas