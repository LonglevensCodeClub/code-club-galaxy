export default (galaxy) => {
    // Customise the name of your galaxy
    galaxy.setName('Sun, Planet & Moon')
    
    // Create a sun, assign it to a variable so we can use it further in the code
    const sun = galaxy.newSun({
        colour: 'orange'
    })

    // Create a planet that orbits the sun, passing in some customisation
    const planet = galaxy.newPlanet({
        colour: 'blue'
    }).orbit(sun)

    // Create a moon that orbits the planet
    // Notice that this time I am also customising the orbit itself
    galaxy.newPlanet({
        colour: 'green',
        radius: 5 // the size of the planet
    }).orbit(planet, {
        orbitFrequency: 0.3, // how quickly the moon rotates around the planet
        radius: 20 // how far the moon should be from the planet
    })

}