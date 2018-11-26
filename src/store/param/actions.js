import * as types from './actionTypes'

export default {
    changeSearchSort (obj) {
        return {
            type: types.SEARCH_SORT,
            value: obj
        }
    }
}