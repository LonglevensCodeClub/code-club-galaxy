import Animator from './Animator'

const generateDefaultProps = () => ({
    amplitude: 1.5,
    frequency: 0.5, 
    baseSize: 10,
    phase: Math.random() * 2 * Math.PI
})

class Pulse extends Animator {
    constructor(element, userProps) {
        super(generateDefaultProps(), userProps)

        this.element = element
        this.setProp('baseSize', this.element.getProp('size'))
    }
    
    /**
     * Updates the position of all the satellites so they travel around the orbit
     * 
     * @param {number} time The current time
     */
    updateFrame(time) {
        const angle = 2 * Math.PI * this.props.frequency * new Date().getTime() / 1000;
        
        let size = this.props.baseSize + (this.props.amplitude * Math.sin(angle + this.props.phase))
                
        this.element.setSize(size)
    }

    /**
     * Set the speed of the pulse
     * 
     * @param {number} value The frequency of the rotation
     */
    setFrequency(value) {
        this.setProp('frequency', value)
    }

    /**
     * Set the phase of the pulse, used to give a natural randomness
     * but not clash
     * 
     * @param {number} value The phase in radians
     */
    setPhase(value) {
        this.setProp('phase', value)
    }

    /**
     * Set the amplitude of the pulse
     */
    setAmplitude(value) {
        this.setProp('amplitude', value)
    }
}

export default Pulse