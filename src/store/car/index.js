import default_state from './defaultState'
import * as types from './actionTypes'
import connect from '@connect'
import actionCreators from './actions'

connect.addActions({
    car: actionCreators
})

const reducer = ( previous_state = default_state, action ) => {
    switch(action.type){
        case types.ADD_GOODS+'_FULFILLED':
            previous_state.info = action.payload.info; break;
        case types.GET_GOODS+'_FULFILLED':
            previous_state.info = action.payload.info; break;
        default: return previous_state;
    }
    return previous_state
}

export default reducer