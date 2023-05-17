import { combineReducers } from "redux";
import UserReducers from "../Features/Users/UserReducers";

// import { ContactReducer} from '../Features/Contacts/ContactReducer'

const rootReducer = combineReducers({
    user : UserReducers,
    // contact :ContactReducer
})

export default rootReducer

