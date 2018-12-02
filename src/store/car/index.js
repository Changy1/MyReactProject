import default_state from './defaultState'
import * as types from './actionTypes'
import connect from '@connect'
import actionCreators from './actions'

connect.addActions({
    car: actionCreators
})

const reducer = ( previous_state = default_state, action ) => {
    // 坑！ 这里必须要返回一个新的对象，因为如果是直接返回previous的话，改变他内部的info的值，并不等于改变对象
    let newArr = Object.assign({}, previous_state)
    switch(action.type){
        case types.ADD_GOODS+'_FULFILLED':
            newArr.info = action.payload.info; break;
        case types.GET_GOODS+'_FULFILLED':
            newArr.info = action.payload.info; break;
        case types.REMOVE_GOODS+'_FULFILLED':
            newArr.info = action.payload.info; break;
        default: return previous_state;
    }
    return newArr
}

export default reducer