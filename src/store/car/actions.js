import * as types from './actionTypes'
import api from '../../util/api'

export default {
    changeGoodsForCar (info) { 
        return {
            type: types.ADD_GOODS,
            payload: api.addInfo(info)
        }
    },
    getGoodsForCar () {
        return {
            type: types.GET_GOODS,
            payload: api.getInfo()
        }
    },
    removeGoodsForCar (info) {
        return{
            type: types.REMOVE_GOODS,
            payload: api.removeInfo(info)
        }
    }
}