export default (galaxy) => {
	galaxy.setName( 'RubySolarSystem')
	const sun = galaxy.newSun({
		colour: 'red',
		radius: 30
	})

	// Create the planet
	const bluePlanet = galaxy.newPlanet({
		colour: 'blue',
		radius: 25,
	})

	// Put the planet in orbit
	bluePlanet.orbit(sun)

	const pink = galaxy.newPlanet({
		colour: 'pink',
		radius: 15
	})
	pink.orbit (bluePlanet)

   // how quick or how slow planet moves
    pink.orbit (sun, {
		frequency: -0.02,
		radiusX: 70,
		radiusY: 88,
		Phase: Math.PI / 40
	})

	const sunColours = ['red', 'coral', 'indigo']
	let i = 0

	setInterval(() => {
		sun.setColour (sunColours[i])
		i += 1
		i %= sunColours.length
	}, 500)
		
}
