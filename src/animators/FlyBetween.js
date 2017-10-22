import Animator from './Animator'

const generateDefaultProps = () => ({
    speed: 5
})

class FlyBetween extends Animator {
    constructor(element, waypoints, userProps) {
        super(generateDefaultProps(), userProps)

        this.element = element
        this.lastFrameTime = 0
        this.waypoints = waypoints
        this.waypointIndex = -1
    }
    
    /**
     * Set the speed the rocket moves
     * 
     * @param {number} value The speed of the rocket 
     */
    setSpeed(value) {
        this.setProp('speed', value)
    }

    aimAtNextWaypoint() {
        this.waypointIndex += 1
        this.waypointIndex %= this.waypoints.length
    }

    /**
     * Moves the rocket closer to it's target
     * 
     * @param {number} time The current time
     */
    updateFrame(time) {
        if (this.lastFrameTime > 0) {
            const timeDiff = time - this.lastFrameTime

            if (this.waypoints.length === 0) {
                // do nothing
            } else if (this.waypoints.length === 1) {
                // Track the first and only waypoint
                this.element.setPosition(this.waypoints[0].state.positionX, 
                    this.waypoints[0].state.positionY)
            } else {
                // -1 means we haven't taken the first step
                if (this.waypointIndex === -1) {
                    // 'warp' to the first waypoint
                    this.element.setPosition(this.waypoints[0].state.positionX, 
                        this.waypoints[0].state.positionY)
                    this.aimAtNextWaypoint()
                } else {
                    const nextWaypoint = this.waypoints[this.waypointIndex]
                    const xDiff = nextWaypoint.state.positionX - this.element.state.positionX
                    const yDiff = nextWaypoint.state.positionY - this.element.state.positionY
                    
                    const distanceFromTarget = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
                    if (distanceFromTarget < this.element.state.speed) {
                        this.aimAtNextWaypoint()
                    } else {
                        const travelAngle = Math.atan2(yDiff, xDiff)
                        const speed = (timeDiff * this.element.state.speed) / 100

                        this.element.setPositionX(this.element.state.positionX + (speed * Math.cos(travelAngle)))
                        this.element.setPositionY(this.element.state.positionY + (speed * Math.sin(travelAngle)))
                    }
                }
            }
        }

        this.lastFrameTime = time
    }
}

export default FlyBetween