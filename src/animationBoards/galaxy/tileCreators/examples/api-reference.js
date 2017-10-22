export default (galaxy) => {
    galaxy.setName('API Reference')

    // Creating a sun will place a static circle onto the galaxy
    // Sun and Planet are functionally identical, I have created two
    // names just so it reads clearly.
    const sun = galaxy.newSun({
        colour: 'blue',
        radius: 50,
        positionX: 150,
        positionY: 130
    })

    // This actually creates the same thing as newSun
    // So the configuration is identical
    const planet = galaxy.newPlanet({
        colour: 'yellow',
        radius: 10,
        // not bothering to set position X and Y, as I will use orbit
    })

    planet.orbit(sun, {
        frequency: 0.05,
        phase: Math.PI / 2, // expressed in Radians
        radiusX: 90,
        radiusY: 70
    })

    // You can create a planet and put into orbit using method chaining
    // Here I will create a moon
    const planet2 = galaxy.newPlanet({
        colour: 'turquoise',
        radius: 5
    }).orbit(planet, {
        radius: 20,
        frequency: 0.5
    })

    // stars can be placed around the galaxy and they will pulse
    // Here I use a loop to create 10 stars
    const stars = []
    for (let x=0; x<10; x++) {
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
    
    // We can put rockets into our galaxy and set them to fly between whatever we want
    const planetRocket = galaxy.newRocket({
        colour: 'GreenYellow',
        size: 3,
        speed: 3
    })
    planetRocket.flyBetween([planet, planet2])

    // This rocket uses method chaining, and will fly between all the stars
    galaxy.newRocket({
        colour: 'Chartreuse',
        size: 2,
        speed: 1
    }).flyBetween(stars)
}