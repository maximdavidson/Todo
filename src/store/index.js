import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Эта функция принимает объект конфигурации, который определяет,
//  какие редукторы будут использоваться в вашем приложении.
//  В вашем случае, вы используете todoReducer для управления
//  состоянием задач.
