import Tile from '../Tile'
import Planet from './elements/Planet'
import Sun from './elements/Planet'
import Star from './elements/Star'
import Rocket from './elements/Rocket'

class Galaxy extends Tile {
    constructor() {
        super({
            Planet,
            Star,
            Rocket,
            Sun
        })
    }
}

export default Galaxy