import { combineReducers } from "redux";
import { hobbiesReducer } from "./hobbies.reducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    usersList:userReducer,
    userHobbies: hobbiesReducer
})

export default rootReducer;