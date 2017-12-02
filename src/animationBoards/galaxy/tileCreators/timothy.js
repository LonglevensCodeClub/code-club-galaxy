export default (galaxy) => {
	// Your code goes inside these curly brackets
	galaxy.setName('Timothy Beridze!')

	//Light Blue Galaxy	
//Make A Sun
//Venus
//Saturn Is My Favorite Plannet Forever
//Uranus Is My Least Favorite Plannet
//I'm Guoaing Krazy
//Create a sun, assign it to a varible

	const sun = galaxy.newSun({
		colour: 'orange',
		radius:40
	})
	//Create a sun, assign it to a variable
	//colour: 'orange', // add this comma
	const planet = galaxy.newPlanet({
		colour: 'lightblue' ,
		radius: 10
		
	})
	planet.orbit(sun, {
		frequency: -0.02,
		radiusX: 55,
		radiusy: 80
		
		
	})
	// The sun will rotate through these colours
	//const sunColours = [ 'red', 'darked', 'indigo']
}
