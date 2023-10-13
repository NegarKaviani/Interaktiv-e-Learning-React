import { applyMiddleware } from "redux";
import { configureStore }  from '@reduxjs/toolkit';
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import courseReducer from "./store/coursesReducer";

const store = configureStore(
    courseReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;