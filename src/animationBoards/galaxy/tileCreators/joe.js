export default (galaxy) => {
    galaxy.setName('Joe Sharp')

    // Create a sun, assign it to a variable
    const sun = galaxy.newSun({
        colour: 'goldenrod', // add this comma
        radius: 40
    })
    
    const planet = galaxy.newPlanet({
        colour: 'green',
        radius: 10
    })
    
    planet.orbit(sun, {
        frequency: -0.02,
        radiusX: 55,
        radiusY: 80
    })

    // The sun will rotate through these colours
    const sunColours = ['red', 'darkred', 'indigo']

    // This index will track which colour we are using
    let i = 0

    setInterval(() => {
        sun.setColour(sunColours[i])
        i += 1
        i %= sunColours.length
    }, 500) // will change colour every 500 milliseconds

    // Demonstration of a pulsing sun using Math.sin to get a rotating value
    setInterval(() => {
        const angle = 2 * Math.PI * new Date().getTime() / 1000;
        sun.setRadius(35 + (5 * Math.sin(angle)))
    })
}

