export default (galaxy) => {
    // Customise the name of your galaxy
    galaxy.setName('Isabelle')
    
    // Create a sun, assign it to a variable so we can use it further in the code
    const sun = galaxy.newSun({
        colour: 'yellow'
    })
    
    let colours = [
		'orange', 'blue', 'green', 'gold', 'maroon', 'indigo'
    ]

    // Create a planet that orbits the sun, passing in some customisation
    for (let x=0; x<6; x++) {
		const planet = galaxy.newPlanet({
			colour: 'red'
		})
		
		planet.orbit(sun, {
			frequency: 0.3,
			phase: x * Math.PI / 3,
			radiusX: 100,
			radiusY: 50
		})
		
		const rocket = galaxy.newRocket({
			speed: 15,
			colour: colours[x]
		})
		rocket.flyBetween([sun, planet])
		
		const moon = galaxy.newPlanet({
			colour: 'purple',
			radius: 5
		})
		
		moon.orbit(planet, {
			radius: 20,
			frequency: 3
		})
	}
}
