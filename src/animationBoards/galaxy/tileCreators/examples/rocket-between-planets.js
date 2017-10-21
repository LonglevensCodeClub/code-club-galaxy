
export default (galaxy) => {
    galaxy.setName('Rocket Demo')

    // Create a sun
    const sun = galaxy.newSun({
        radius: 40,
        colour: 'purple'
    })

    // Create a planet, put it into the sun orbit
    const planet1 = galaxy.newPlanet({
        colour: 'red',
        radius: 5
    })
    planet1.orbit(sun, {
        orbitFrequency: 0.05,
        phase: 0,
        radius: 60,
        colour: 'none'
    })

    // Create a planet, put it into the sun orbit
    const planet2 = galaxy.newPlanet({
        colour: 'orange'
    })
    planet2.orbit(sun, {
        orbitFrequency: -0.05,
        phase: Math.PI,
        radius: 90,
        colour: 'none'
    })

    // Create a Rocket to go between each planet, stopping at the sun each time
    const rocket1 = galaxy.newRocket({
        colour: 'yellow'
    })
    rocket1.flyBetween([planet1, planet2])
}

