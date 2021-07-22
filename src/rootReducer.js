import { combineReducers } from "redux";
import todoReducer from "./containers/Todo/reducer";

const rootReducer = combineReducers({ todoReducer });

export default rootReducer;
