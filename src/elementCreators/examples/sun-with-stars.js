export default (galaxy) => {
    // Customise the name of your galaxy
    galaxy.setName('Sun & Stars')
    
    // Create a sun, assign it to a variable so we can use it further in the code
    galaxy.newSun({
        colour: 'orange'
    })

    for (let x=0; x<10; x++) {
        galaxy.newStar({
            positionX: Math.random() * 250,
            positionY: 50 + (Math.random() * 200)
        })
    }
}