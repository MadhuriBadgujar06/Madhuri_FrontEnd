import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import reduxThunk from 'redux-thunk'

const middleware = [reduxThunk]

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store
