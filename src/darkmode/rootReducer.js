import themeReducer from "/src/darkmode/themeReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    theme: themeReducer,
})

export default rootReducer;