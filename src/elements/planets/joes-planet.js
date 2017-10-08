import Planet from '../../elementTypes/planet'

const joesPlanet = (store) => {
    let planet = new Planet(store)

    planet.setName('Joe')
    planet.setTextColour('lightgreen')
    planet.setPositionX(100)


    let radiusAdjust = 0
    setInterval(() => {
        let radius = 30 + radiusAdjust
        planet.setRadius(radius)

        radiusAdjust += 2
        radiusAdjust %= 10
    }, 100)
    
    let colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    let colourIndex = 0
    setInterval(() => {
        let colour = colours[colourIndex]
        planet.setColour(colour)
        colourIndex += 1
        colourIndex %= (colours.length)
    }, 1000)
}

export default joesPlanet