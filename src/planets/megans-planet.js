const megansPlanet = (updatePlanet) => {
    updatePlanet({
        positionX: 500,
        colour: 'DarkTurquoise'
    })

    const rotationCentreX = 600
    const rotationCentreY = 400
    const orbitDistance = 100
    const orbitFrequency = 0.25

    setInterval(() => {
        const angle = 2 * Math.PI * orbitFrequency * new Date().getTime() / 1000;
        const xPosition = orbitDistance * Math.sin(angle);
        const yPosition = orbitDistance * Math.cos(angle);
        let positionX = rotationCentreX + xPosition;
        let positionY = rotationCentreY + yPosition;
        updatePlanet({
            positionX,
            positionY
        })
    }, 50)
}

module.exports = {
    'Megan': megansPlanet
}