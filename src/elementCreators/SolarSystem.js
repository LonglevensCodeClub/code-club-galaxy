
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
        orbitFrequency: 0.1,
        radius: 18
    })
    
    // Venus
    galaxy.newPlanet({
        colour: 'orange',
        radius: 5
    }).orbit(sun, {
        orbitFrequency: 0.2,
        radius: 24
    })
    
    // Earth
    galaxy.newPlanet({
        colour: 'green',
        radius: 4
    }).orbit(sun, {
        orbitFrequency: 0.1,
        radius: 30
    })
    
    // Mars
    galaxy.newPlanet({
        colour: 'red',
        radius: 3
    }).orbit(sun, {
        orbitFrequency: 0.05,
        radius: 34
    })
    
    // Jupiter
    galaxy.newPlanet({
        colour: 'orange',
        radius: 10
    }).orbit(sun, {
        orbitFrequency: 0.05,
        radius: 45
    })
    
    // Saturn
    galaxy.newPlanet({
        colour: 'lightyellow',
        radius: 8
    }).orbit(sun, {
        orbitFrequency: 0.05,
        radius: 55
    })
    
    // Neptune
    galaxy.newPlanet({
        colour: 'lightblue',
        radius: 7
    }).orbit(sun, {
        orbitFrequency: 0.05,
        radius: 63
    })
    
    // Uranus
    galaxy.newPlanet({
        colour: 'grey',
        radius: 5
    }).orbit(sun, {
        orbitFrequency: 0.05,
        radius: 70
    })
}