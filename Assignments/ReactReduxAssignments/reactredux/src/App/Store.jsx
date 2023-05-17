import rootReducer from "./rootReducer";
import { createStore,applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'

const middleware = [reduxThunk];

const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;
