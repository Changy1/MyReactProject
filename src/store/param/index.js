
import default_state from './defaultState'
import * as types from './actionTypes'
import connect from '@connect'
import actionCreators from './actions'

connect.addActions({
    param: actionCreators
})

const reducer = (previous_state = default_state, action) => {
    let new_state = Object.assign( {}, previous_state)

    switch (action.type) {
        case types.SEARCH_SORT : 
            new_state.search = Object.assign( {}, action.value); break;
        default: return previous_state;
    }

    return new_state
}

export default reducer