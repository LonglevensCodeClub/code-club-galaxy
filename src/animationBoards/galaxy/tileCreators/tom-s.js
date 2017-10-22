export default (galaxy) => {
    // Customise the name of your galaxy
    galaxy.setName('Toddler Tom')
    
    const rocketTargets = []

    // Create a sun, assign it to a variable so we can use it further in the code
    const sun = galaxy.newSun({
        colour: 'green',
        radius: 30
    })
    rocketTargets.push(sun)

    let planetPhase = 0
    for (let x=0; x<6; x++) {
        // Create a planet that orbits the sun, passing in some customisation
        const planet = galaxy.newPlanet({
            colour: 'yellow'
        }).orbit(sun,{
            phase: planetPhase,
            radius: 70
        })
        planetPhase += Math.PI / 3
        rocketTargets.push(planet)
        rocketTargets.push(sun)

        let moonPhase = 0
        for (let y=0; y<3; y++) {
            // Create a moon that orbits the planet
            // Notice that this time I am also customising the orbit itself
            let moon = galaxy.newPlanet({
                colour: 'red',
                radius: 5 // the size of the planet
            }).orbit(planet, {
                phase: moonPhase,
                frequency: -0.3, // how quickly the moon rotates around the planet
                radius: 20, // how far the moon should be from the planet
                colour: 'none'
            })

            moonPhase += 2 * Math.PI / 3

            let satellitePhase = 0
            for (let z=0; z<3; z++) {
                galaxy.newPlanet({
                    colour: 'purple',
                    radius: 3 // the size of the planet
                }).orbit(moon, {
                    phase: satellitePhase,
                    frequency: 0.6, // how quickly the moon rotates around the planet
                    radius: 15, // how far the moon should be from the planet
                    colour: 'none'
                })
            }
            satellitePhase += 2 * Math.PI / 3
        }
    }

    galaxy.newRocket({
        colour: 'crimson',
        size: 3,
        speed: 5
    }).flyBetween(rocketTargets)
}