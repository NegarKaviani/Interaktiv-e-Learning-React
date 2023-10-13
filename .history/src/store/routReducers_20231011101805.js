import courseReducer from "./coursesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  courses: courseReducer,
});

export default rootReducer;