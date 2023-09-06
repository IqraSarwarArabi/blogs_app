import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import blogsSlice from "../blogs/blogsSlice";

const rootReducer = combineReducers({
  blogs: blogsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});
