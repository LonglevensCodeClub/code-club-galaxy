
export default (galaxy) => {
    galaxy.setName('Kate')

    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

    let lastPlanet = undefined;
    let count = 0

    colours.forEach(colour => {
        const planet = galaxy.newPlanet({
            colour,
            radius: 50 / (2 * (count+1))
        });
        if (lastPlanet) {
            planet.orbit(lastPlanet, {
                orbitFrequency: count * 0.07,
                radius: 50 / count,
                colour: 'none',
                phase: 0
            })
        }
        count++
        lastPlanet = planet
    })
}
