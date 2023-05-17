import { combineReducers } from "redux";
import { userReducer } from "../Features/userReducer";

const rootReducer=combineReducers({
    amount :userReducer
})
export default rootReducer