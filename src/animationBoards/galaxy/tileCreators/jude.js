export default (galaxy) => {
	galaxy.setName("Jude")
	const sun = galaxy.newSun({
		colour: "green",
		radius: 30
	})
	const planet2 = galaxy.newPlanet({
		colour: 'purple',
		radius: 12
	})
	
	planet2.orbit(sun, {
		frequency: -0.05,
		radiusX: 70,
		radiusY: 70,
		Phase: Math.PI / 4
	})
	const planet3 = galaxy.newPlanet({
		colour: 'blue',
		radius: 8
	})
	
	planet3.orbit(sun, {
		frequency: -0.50,
		radiusX: 90,
		radiusY: 90,
		Phase: Math.PI / 4
	})
	const moon1 = galaxy.newPlanet({
		colour: 'blue',
		radius: 5
	})
	moon1.orbit(planet2, {
		frequency: -0.1,
		radiusX: 20,
		radiusY: 20,
		Phase: Math.PI / 4
	})
	const planetRocket = galaxy.newRocket({
		colour: 'gray',
		size: 5,
		speed: 4
	})
	planetRocket.flyBetween([moon1, planet2, sun])
	
	const planetRocket2 = galaxy.newRocket({
		colour: 'white',
		size: 8,
		speed: 4
	})
	planetRocket2.flyBetween([sun, moon1])
}
