import Element from './../../Element'
import Orbit from './Orbit'

const defaultProps = {
    size: 5,
    speed: 4,
    travelAngle: 0
}

class Rocket extends Element {
    constructor(tileId, userProps) {
        super('rocket', tileId, defaultProps, userProps)
        this.lastFrameTime = 0
        this.waypoints = []
    }
    
    flyBetween(waypoints) {
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

    /**
     * Set the size of the rocket
     * 
     * @param {number} value The base size for the star, it will twinkle around this value 
     */
    setSize(value) {
        this.setProp('size', value)
    }

    setTravelAngle(value) {
        this.setProp('travelAngle', value)
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
                this.setPosition(this.waypoints[0].state.positionX, 
                    this.waypoints[0].state.positionY)
            } else {
                // -1 means we haven't taken the first step
                if (this.waypointIndex === -1) {
                    // 'warp' to the first waypoint
                    this.setPosition(this.waypoints[0].state.positionX, 
                        this.waypoints[0].state.positionY)
                    this.aimAtNextWaypoint()
                } else {
                    const nextWaypoint = this.waypoints[this.waypointIndex]
                    const xDiff = nextWaypoint.state.positionX - this.state.positionX
                    const yDiff = nextWaypoint.state.positionY - this.state.positionY
                    
                    const distanceFromTarget = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
                    if (distanceFromTarget < this.state.speed) {
                        this.aimAtNextWaypoint()
                    } else {
                        const travelAngle = Math.atan2(yDiff, xDiff)
                        this.setTravelAngle(180 * Math.PI / travelAngle)

                        const speed = (timeDiff * this.state.speed) / 100

                        this.setPositionX(this.state.positionX + (speed * Math.cos(travelAngle)))
                        this.setPositionY(this.state.positionY + (speed * Math.sin(travelAngle)))
                    }
                }
            }
        }

        this.lastFrameTime = time
    }
    
    orbit(centre, config) {
        const orbit = new Orbit(this.tileId, centre, this, config)
        this.addChild(orbit)
        return this
    }
}

export default Rocket