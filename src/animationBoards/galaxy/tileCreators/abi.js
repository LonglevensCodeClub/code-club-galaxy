export default (galaxy) => {
    
	galaxy.setName( 'Abbie ward')
	
	// Make an outer sun
	const sun = galaxy.newSun({
		colour: 'blue', // add this comma
		radius: 40
	})
	
	// Make an inner sun
	galaxy.newSun({
		colour: 'orange'
	})
	
	// Make a planet
	const planet = galaxy.newPlanet({
		colour: 'red',
		radius: 10
	})
	
	// Put planet in orbit around sun
	planet.orbit(sun, {
		frequency: -0.5,
		radiusX: 55,
		radiusY: 80,
		Phase: Math.PI / 2
	})

	const sunColours = ['DarkGoldenRod' , 'silver', 'gold']
	let i = 0
	
	setInterval(() => {
		sun.setColour(sunColours[i])
		i += 1
		i %= sunColours.length
	}, 500) 
	
				

}
