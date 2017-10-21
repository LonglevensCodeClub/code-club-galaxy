export default (galaxy) => {
    // Customise the name of your galaxy
    galaxy.setName('Sun & Two Planets')
    
    // Create a sun, assign it to a variable so we can use it further in the code
    const sun = galaxy.newSun({
        colour: 'orange'
    })

    // Create a planet that orbits the sun
    galaxy.newPlanet({
        colour: 'blue',
        radius: 5
    }).orbit(sun, {
        radius: 40, // How far the planet is from the sun
        orbitFrequency: +0.2 // The speed of rotation, positive = anticlockwise
    })

    // Create a planet that orbits the sun
    galaxy.newPlanet({
        colour: 'green',
        radius: 5
    }).orbit(sun, {
        radius: 70,
        orbitFrequency: -0.2 // The speed of rotation, negative = clockwise
    })
}