export default (geometry) => {
    geometry.setName('Rainbow Rectangles')

    const rectangles = []
    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    colours.reverse().forEach((colour, i) => {
        const rectangle = geometry.newRectangle({
            colour,
            positionX: 20 + (20 * i),
            positionY: 50 + (10 * i)
        })
        rectangles.push(rectangle)
    })

    setInterval(() => {
        const angle = 2 * Math.PI * new Date().getTime() / 1000;

        rectangles.forEach((rectangle, i) => {
            rectangle.setHeight(50 + (20 * Math.sin(angle + i)))
            rectangle.setWidth(50 + (20 * Math.cos(angle + i)))
        })
    }, 50)
}