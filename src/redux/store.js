/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
// import  todoReducer  from "./slice/todo";
import todoReducer from "./slice/todo";
// console.log(todoSlice);
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
