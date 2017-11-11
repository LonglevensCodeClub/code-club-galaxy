export default (galaxy) => {
	// Your code all goes inside this function
	
	galaxy.setName ( 'Ruby Lou')
	
	const sun = galaxy.newSun({
		colour: 'purple',
		radius: 30,
		positionX: 70
		
    })
        
    const planet = galaxy.newPlanet({
		colour: 'red',
		radius: 15	
	})
	planet.orbit(sun, {
		radiusX: 55,
	})
	
	const Ruby = galaxy.newSun({
		colour: 'pink'
	})
	
	const sunColours = ['lightblue', 'purple']
	let i =0
	
	setInterval(() => {
		sun.setColour(sunColours[i])
		i += 1
		i %= sunColours.length
	}, 500)
	
}
 

