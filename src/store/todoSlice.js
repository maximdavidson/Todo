import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos", // имя слайса. Используется для генерации типов действия
  initialState: {
    // начальное состояние слайса
    todos: [],
  },
  reducers: {
    // объект, определяющий функции редукторов слайса
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Слайсер- это часть Redux Toolkit,
// которая предоставляет упрощенный способ написания редукторов
// и действий. Вместо того чтобы писать отдельные функции редукторов
// и действий, вы можете использовать createSlice для генерации
// этих функций автоматически
