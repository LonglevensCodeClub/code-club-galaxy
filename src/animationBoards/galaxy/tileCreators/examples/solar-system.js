
export default (galaxy) => {
    galaxy.setName('Solar System')

    const sun = galaxy.newSun({
        colour: 'goldenrod'
    })

    // Mercury
    galaxy.newPlanet({
        colour: 'grey',
        radius: 3
    }).orbit(sun, {
        frequency: 0.1,
        radius: 18,
        colour: 'none'
    })
    
    // Venus
    galaxy.newPlanet({
        colour: 'orange',
        radius: 5
    }).orbit(sun, {
        frequency: 0.2,
        radius: 24,
        colour: 'none'
    })
    
    // Earth
    galaxy.newPlanet({
        colour: 'green',
        radius: 4
    }).orbit(sun, {
        frequency: 0.1,
        radius: 30,
        colour: 'none'
    })
    
    // Mars
    galaxy.newPlanet({
        colour: 'red',
        radius: 3
    }).orbit(sun, {
        frequency: 0.05,
        radius: 34,
        colour: 'none'
    })
    
    // Jupiter
    galaxy.newPlanet({
        colour: 'orange',
        radius: 10
    }).orbit(sun, {
        frequency: 0.05,
        radius: 45,
        colour: 'none'
    })
    
    // Saturn
    galaxy.newPlanet({
        colour: 'lightyellow',
        radius: 8
    }).orbit(sun, {
        frequency: 0.05,
        radius: 55,
        colour: 'none'
    })
    
    // Neptune
    galaxy.newPlanet({
        colour: 'lightblue',
        radius: 7
    }).orbit(sun, {
        frequency: 0.05,
        radius: 63,
        colour: 'none'
    })
    
    // Uranus
    galaxy.newPlanet({
        colour: 'grey',
        radius: 5
    }).orbit(sun, {
        frequency: 0.05,
        radius: 70,
        colour: 'none'
    })
}