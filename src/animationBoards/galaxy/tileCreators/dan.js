export default (galaxy) => {
	galaxy.setName("Dan's solar system")
	const sun = galaxy.newSun({
		colour: "GoldenRod",
		radius: 30
	})
	const planet1 = galaxy.newPlanet({
		colour: 'red',
		radius: 5
	})
	planet1.orbit(sun, {
		frequency: -0.08,
		radiusX: 60,
		radiusY: 60,
		Phase: Math.PI / 4
	})
	const planet2 = galaxy.newPlanet({
		colour: 'purple',
		radius: 7
	})
	
	planet2.orbit(sun, {
		frequency: -0.05,
		radiusX: 70,
		radiusY: 70,
		Phase: Math.PI / 4
	})
	const planet3 = galaxy.newPlanet({
		colour: 'blue',
		radius: 7
	})
	
	planet3.orbit(sun, {
		frequency: -0.04,
		radiusX: 90,
		radiusY: 90,
		Phase: Math.PI / 4
	})

	const planetRocket = galaxy.newRocket({
	colour: 'gray',
	size: 2,
	speed: 4
	})
	planetRocket.flyBetween([planet1, planet2, planet3])
}
