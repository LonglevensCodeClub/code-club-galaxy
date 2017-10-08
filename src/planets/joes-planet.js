const joesPlanet = (updatePlanet) => {
    updatePlanet({
        textColour: 'lightgreen'
    })

    updatePlanet({
        positionX: 100,
    })
    let radiusAdjust = 0
    setInterval(() => {
        let radius = 30 + radiusAdjust
        updatePlanet({
            radius
        })

        radiusAdjust += 2
        radiusAdjust %= 10
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