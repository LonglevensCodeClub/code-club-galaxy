
import tileCreators from './tileCreators'
import renderFunctions from './renderFunctions'
import Galaxy from './Galaxy'

export default {
    tiles: tileCreators.map(tile => {
        const galaxy = new Galaxy()
        tile(galaxy)
        return galaxy
    }),
    renderFunctions
}