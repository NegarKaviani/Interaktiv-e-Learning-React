import { applyMiddleware } from "redux";
import { configureStore }  from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/taskReducer";

const store = configureStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;