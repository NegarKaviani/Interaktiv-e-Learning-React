import { applyMiddleware } from "redux";
import { configureStorefrom }  '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/taskReducer";

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;