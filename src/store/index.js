import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'

import reducer from './reducer'

const store = createStore( 
    reducer, 
    composeWithDevTools(applyMiddleware(promiseMiddleware())
    )
)

export default store