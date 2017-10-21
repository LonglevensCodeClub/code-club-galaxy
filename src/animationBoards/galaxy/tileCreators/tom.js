export default (galaxy) => {
    galaxy.setName('Tom')

    const sun = galaxy.newSun({
        colour: 'green',
        radius: 30
    })

    for (let x=0; x<3; x++) {
        const planet = galaxy.newPlanet({
            colour: 'yellow'
        }).orbit(sun)

        const moon = galaxy.newPlanet({
            colour: 'brown',
            radius: 5
        }).orbit(planet, {
            colour: 'none',
            radius: 20,
            orbitFrequency: -0.5 + Math.random()
        })

        const rocket = galaxy.newRocket({
            colour: 'blue',
            size: 2
        })

        rocket.flyBetween([planet, moon])
    }
}