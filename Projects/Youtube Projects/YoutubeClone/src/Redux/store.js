import {applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';
import {legacy_createStore as createStore} from 'redux';
const initialState={
    name:"Sumit",
    age:"21"
}
const reducer =(initialState)=>initialState;
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store