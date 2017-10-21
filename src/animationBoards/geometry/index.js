
import tileCreators from './tileCreators'
import renderFunctions from './renderFunctions'
import Geometry from './Geometry'

export default {
    tiles: tileCreators.map(tile => {
        const geometry = new Geometry()
        tile(geometry)
        return geometry
    }),
    renderFunctions
}