const joesPlanet = (updatePlanet) => {
    updatePlanet({
        textColour: 'lightgreen'
    })

    updatePlanet({
        radius: 10,
        positionX: 100,
    })
    let radius = 0
    setInterval(() => {
        updatePlanet({
            radius
        })

        radius += 2
        radius %= 200
    }, 100)
    
    let colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    let colourIndex = 0
    setInterval(() => {
        let colour = colours[colourIndex]
        updatePlanet({colour})
        colourIndex += 1
        colourIndex %= (colours.length)
    }, 1000)
}

export default {
    'Joe': joesPlanet
}