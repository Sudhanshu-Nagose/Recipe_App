import Reducer from "./Reducer";
import { combineReducers } from "@reduxjs/toolkit";

const appReducer = combineReducers({
  Reducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
