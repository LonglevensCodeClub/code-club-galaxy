export default (galaxy) => {
	galaxy.setName('Josh')
	const sun = galaxy.newSun({
		colour: 'red',
		radius: 20
	})
	const planet1 = galaxy.newPlanet({
		colour: 'purple',
		radius: 15
	})
	planet1.orbit(sun, {
		frequency: -0.1,
		radiusX: 60,
		radiusY: 60,
		Phase: Math.PI / 4
	})
	const moon1 = galaxy.newPlanet({
		colour: 'blue',
		radius: 5
	})
	moon1.orbit(planet1, {
		frequency: -0.1,
		radiusX: 30,
		radiusY: 30,
		Phase: Math.PI / 4
	})
	const planet2 = galaxy.newPlanet({
		colour: 'green',
		radius: 9
	})
	planet2.orbit(sun, {
		frequency: -0.1,
		radiusX: 100,
		radiusY: 100,
		Phase: Math.PI / 4
	})
	const planetRocket = galaxy.newRocket({
	colour: 'gray',
	size: 4,
	speed: 7
	})
	planetRocket.flyBetween([planet2, moon1,])
	
	const planetRocket2 = galaxy.newRocket({
	colour: 'white',
	size: 4,
	speed: 7
	})
	planetRocket2.flyBetween([planet1, sun,])
}
