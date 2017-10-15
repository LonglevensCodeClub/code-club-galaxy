export default (galaxy) => {
    // Customise the name of your galaxy
    galaxy.setName('Sun & Planet')
    
    // Create a sun, assign it to a variable so we can use it further in the code
    const sun = galaxy.newSun({
        colour: 'orange'
    })

    // Create a planet that orbits the sun, passing in some customisation
    galaxy.newPlanet({
        colour: 'blue'
    }).orbit(sun)

}