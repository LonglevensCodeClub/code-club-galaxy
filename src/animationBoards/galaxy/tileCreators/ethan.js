export default (galaxy) => {
    // Customise the name of your galaxy
    galaxy.setName('Ethan')
    
    // Create a sun, assign it to a variable so we can use it further in the code
    const sun = galaxy.newSun({
        colour: 'blue',
        radius: 30
    })

    // Create a moon that orbits the planet
    // Notice that this time I am also customising the orbit itself
    const stars = []
    for (let x=0; x<50; x++) {
        let star = galaxy.newStar({
            positionX: Math.random() * 250,
            positionY: 40 + (Math.random() * 200),
            size: Math.random() * 2, // stars will pulse, 
        }).pulse({
            phase: Math.random() * 2 * Math.PI,
            amplitude: 1.0, // how much the star should shrink and grow by
            frequency: 0.5, // set the speed of the pulse
        })
        stars.push(star)
    }
    
    const numPlanets = 5
    const planets = []
    const moons = []
    const rockets = []
    for (let i=0; i<numPlanets; i++) {
		const planet = galaxy.newPlanet({
			colour: 'yellow'
		}).orbit(sun, {
			phase: i * (Math.PI * 2) / numPlanets
		})
		
		planets.push(planet)
		
		const moon = galaxy.newPlanet({
			colour: 'green',
			radius: 5 // the size of the planet
		}).orbit(planet, {
			frequency: 0.3, // how quickly the moon rotates around the planet
			radius: 20 // how far the moon should be from the planet
		})
		
		moons.push(moon)
		
			// We can put rockets into our galaxy and set them to fly between whatever we want
		const rocket = galaxy.newRocket({
			colour: 'Red',
			size: 5,
			speed: 15
		}).flyBetween([planet, sun])
		
		rockets.push(rocket)
	}
}

